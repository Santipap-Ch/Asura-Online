let express = require("express");
let bodyParser = require("body-parser");
let router = express.Router();
//let cors = require("cors");
let app = express();

app.use("/api", bodyParser.json(), router);
app.use("/api", bodyParser.urlencoded({ extended: false }), router);

let items = [
  { id: 1, name: "vac", nameItem: "itemTest", description: "tttttt" },
];

let posts = [
  { id: 1, name: "vac", subject: "รับจ้างพาเวล", details: "1-99 = 10m" },
];

router
  .route("/items")
  //get all items
  .get((req, res) => res.json(items));

router
  .route("/posts")
  //get all posts
  .get((req, res) => res.json(posts));

router.route("/insert/:type").post((req, res) => {
  let type = req.params.type;
  if ((type = "item")) {
    var item = {};
    item.id = items.length > 0 ? items[items.length - 1].id + 1 : 0;
    item.name = req.body.name;
    item.nameItem = req.body.nameItem;
    item.description = req.body.description;
    items.push(item);
    res.json({ message: "Item created" });
  } else {
    var post = {};
    post.id = posts.length > 0 ? posts[posts.length - 1].id + 1 : 0;
    post.name = req.body.name;
    post.subject = req.body.subject;
    post.details = req.body.details;
    res.json({ message: "Post created" });
  }
});

router
  .route("/items/:item_id")
  .get((req, res) => {
    let id = req.params.item_id;
    let index = items.findIndex((item) => item.id === +id);
    res.json(items[index]);
  })
  .delete((req, res) => {
    let id = req.params.item_id;
    let index = items.findIndex((item) => item.id === +id);
    items.splice(index,1);
    res.json({message:"item deleted"+req.params.item_id});
  });

  router
  .route("/posts/:post_id")
  .get((req, res) => {
    let id = req.params.post_id;
    let index = posts.findIndex((post) => post.id === +id);
    res.json(posts[index]);
  })
  .delete((req, res) => {
    let id = req.params.post_id;
    let index = posts.findIndex((post) => post.id === +id);
    posts.splice(index,1);
    res.json({message:"post deleted"+req.params.post_id});
  });

app.use("*", (req, res) => res.status(404).send("404 Not found"));
app.listen(3000, () => console.log("Server is running"));

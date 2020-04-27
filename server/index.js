let express = require("express");
let bodyParser = require("body-parser");
let router = express.Router();
//let cors = require("cors");
let app = express();

app.use("/api", bodyParser.json(), router);
app.use("/api", bodyParser.urlencoded({ extended: false }), router);

let items = [
  {
    id: 1,
    name: "vac",
    phoneNumber: "089-22543xx",
    email: "santepap.chairee@Gmail.com",
    nameItem: "กระเป๋าสตางค์",
    img: "https://dl.lnwfile.com/_/dl/_raw/mp/v1/t0.jpg",
    detail: "คาดว่าให้ที่ตึก 6",
  },
];

router
  .route("/items")
  //get all items
  .get((req, res) => res.json(items));

router.route("/insert").post((req, res) => {
  var item = {};
  item.id = items.length > 0 ? items[items.length - 1].id + 1 : 0;
  item.name = req.body.name;
  item.phoneNumber = req.body.phoneNumber;
  item.email = req.body.email;
  item.nameItem = req.body.nameItem;
  item.img = req.body.img;
  item.detail = req.body.detail;
  items.push(item);
  res.json({ message: "Item created" });
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
    items.splice(index, 1);
    res.json({ message: "item deleted" + req.params.item_id });
  })
  .put((req, res) => {
    let id = req.params.item_id;
    let index = items.findIndex((item) => item.id === +id);
    items[index].name = req.body.name;
    items[index].phoneNumber = req.body.phoneNumber;
    items[index].email = req.body.email;
    items[index].nameItem = req.body.nameItem;
    items[index].img = req.body.img;
    items[index].detail = req.body.detail;
    res.json({ message: "item updated" + req.params.item_id });
  });

app.use("*", (req, res) => res.status(404).send("404 Not found"));
app.listen(3000, () => console.log("Server is running"));

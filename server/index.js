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

app.use("*", (req, res) => res.status(404).send("404 Not found"));
app.listen(3000, () => console.log("Server is running"));

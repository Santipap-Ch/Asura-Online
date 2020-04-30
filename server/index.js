require('tls').DEFAULT_MIN_VERSION = 'TLSv1'
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const soap = require("soap");
const app = express();
const cors = require("cors");
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';

app.use(cors());
app.use("/api", bodyParser.json(), router);
app.use("/api", bodyParser.urlencoded({ extended: false }), router);
app.set("PORT", process.env.PORT || 4521);

let items = [
  {
    id: 1,
    name: "สันติภาพ",
    phoneNumber: "089-22543xx",
    email: "santepap.chairee@gmail.com",
    nameItem: "กระเป๋าสตางค์",
    img: "https://dl.lnwfile.com/_/dl/_raw/mp/v1/t0.jpg",
    detail: "คาดว่าหายที่ตึก 6",
  },
  {
    id: 2,
    name: "ศศิธร",
    phoneNumber: "089-22543xx",
    email: "santepap.chairee@Gmail.com",
    nameItem: "กระเป๋าสตางค์",
    img: "http://jpninfo.com/wp-content/uploads/2017/08/lost-wallet.jpg",
    detail: "ลืมที่โรงอาหาร",
  },
  {
    id: 3,
    name: "สมคิด",
    phoneNumber: "089-22543xx",
    email: "santepap.chairee@Gmail.com",
    nameItem: "กระเป๋าสตางค์",
    img: "http://www.clm.up.ac.th/project/lost_items/image/15229126721921.JPG",
    detail: "ลืมที่โรงอาหาร",
  },
];

router
  .route("/items")
  .get((req, res) => res.json(items));

router.route("/login").post((req, res) => {
  soap.createClient(url, (err, client) => {
    if (err) console.error(err);
    else {
      let user = {};
      user.username = req.body.username;
      user.password = req.body.password;      
      client.GetStudentDetails(user, function (err, response) {
        if (err) console.error(err);
        else {
          res.send(response);
        }
      });
    }
  });
});

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
const server = app.listen(app.get("PORT"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
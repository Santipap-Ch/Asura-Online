let express = require("express");
let bodyParser = require("body-parser");
let router = express.Router();
let cors = require("cors");
let app = express();

app.use("/api", bodyParser.json(), router);
app.use("/api", bodyParser.urlencoded({ extended: false }), router);

let item = [{ id: 1, name: "test", description: "tttttt" }];

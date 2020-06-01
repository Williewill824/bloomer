const express = require("express");
const path = require("path");

var app = express();  

var PORT = process.env.PORT || 9080;

var directory = path.join(__dirname, "/public");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));




app.listen(PORT, function () {
  console.log("listening on PORT: " + PORT);
});

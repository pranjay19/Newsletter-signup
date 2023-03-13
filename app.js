const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.post("/", function(req, res) {
    res.sendFile(__dirname + "/success/success.html");
})


app.listen(3000, function() {
    console.log("server has started at port 3000")
});
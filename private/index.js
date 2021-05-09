const express = require("express");
const path = require("path");
const fs = require("fs");
var app = express();

const PUBLIC = path.resolve(__dirname, "../public");
const INFO = path.resolve(__dirname, "info");
const PORT = process.env.PORT || 80;

app.use("/res", express.static(path.resolve(PUBLIC, "res")));
app.use("/dev", express.static(path.resolve(PUBLIC, "page/dev")));
app.use("/api", express.static(path.resolve(__dirname, "info")));

app.get("/", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/index.html"));
});

app.get("/harlxy2004", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/harlxy.html"));
});
app.get("/eco", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/eco.html"));
});

app.get("/rules", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/rules.html"));
});

app.get("/levels", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/levels.html"));
});

app.get("/ranks", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/ranks.html"));
});

app.get("/staff", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/staff.html"));
});

app.get("/discord", function (req, res) {
    res.send("https://discord.gg/pUfV4BBDgf");
});

app.get("/store", function (req, res) {
    res.redirect("http://store.maliamc.com");
});

app.get("*", function (req, res) {
    res.sendFile(path.resolve(PUBLIC, "page/index.html"));
});


app.listen(process.env.PORT || 80, function () {
    console.log("Listening on *:" + (process.env.PORT || 80));
});

require("dotenv").config();

const express = require("express");

const ejs = require("ejs");
const path = require("path");
const app = new express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect("YOUR MONGO URL GOES HERE", { useNewUrlParser: true });

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.listen(4000, () => {
  console.log("App listening on port 4000");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

//Our first POST route
app.post("/posts/store", (req, res) => {
  BlogPost.create(req.body, (error, blogpost) => {
    res.redirect("/");
  });
});

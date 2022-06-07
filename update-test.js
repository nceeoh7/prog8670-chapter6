const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect("YOUR MONGO URL GOES HERE", { useNewUrlParser: true });
//You will have to change this ID to the one in your database
let id = "5cb436980b33147489eadfbb";

BlogPost.findByIdAndUpdate(
  id,
  {
    title: "Updated title",
  },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);

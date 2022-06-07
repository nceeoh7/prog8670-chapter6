const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect("YOUR MONGO URL GOES HERE", { useNewUrlParser: true });

BlogPost.create(
  {
    title: "Your custom title",
    body: "your custom body message",
  },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);

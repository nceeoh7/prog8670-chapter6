const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect("YOUR MONGO URL GOES HERE", { useNewUrlParser: true });

BlogPost.find({}, (error, blogspot) => {
  console.log(error, blogspot);
});

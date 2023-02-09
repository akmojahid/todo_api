const express = require("express");
const mongoose = require("mongoose");
const app = express();
//MongoDB and Mongoose

require("dotenv").config(); 
const uri = process.env.DB; 
      
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB Atlas connection established successfully");
});

connection.on("error", (error) => {
  console.error("MongoDB Atlas connection error: ", error);
});

const schema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", schema);

//Routes GET, POST
app.post("/register", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user.save((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send("User registered successfully");
    }
  });
});

//lister
app.listen(3000, () => {
  console.log("Express app listening on port 3000");
});

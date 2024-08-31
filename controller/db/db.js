const mongoose = require("mongoose");

require("dotenv").config();
let local_db_url = ""
const DB_URI = process.env.DB_URI || local_db_url;

/*
- Coonect Database
- create shcema
*/

exports.connectDB = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(DB_URI);
    console.log("Database connected Succesfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//user data scheme
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

//todo data scheme
const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});
exports.UserModel = mongoose.model("User", UserSchema);
exports.Todo = mongoose.model("Todo", TodoSchema);

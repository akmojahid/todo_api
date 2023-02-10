const mongoose = require("mongoose");

require("dotenv").config();
const DB_URI = process.env.DB_URI;

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

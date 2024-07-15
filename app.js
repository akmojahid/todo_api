const express = require("express");
const db = require("./controller/db/db");
const route = require("./controller/route/route");
const app = express();

//middleware
db.connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ msg: "Root Route", Status: "OK" });
});
app.post("/todo/create", route.createTodo);

app.get("/todo/all", route.getAll);
app.get("/todo", route.todo);
app.get("/todo/:id", route.getOne);

app.patch("/todo/:id", route.updateOne);

app.delete("/todo/:id", route.delete);

//Server running
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});

const express = require("express");
const db = require("../db/db");

exports.getAll = async (req, res) => {
  res.status(201).json({
    succes: true,
    data: await db.Todo.find(),
  });
};

exports.getOne = async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ succes: true, data: await db.Todo.findById(id) });
};

exports.todo = async (req, res) => {
  res.status(200).json(await db.Todo.find());
};

exports.updateOne = async (req, res) => {
  const id = req.params.id;

  await db.Todo.updateOne(
    { _id: id },
    {
      name: req.body.name ?? this.name,
      details: req.body.details ?? this.details,
    }
  );
  res.status(300).json(await db.Todo.findById(id));
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await db.Todo.deleteOne({ _id: id });
    res.status(200).json({ succes: true, operation: "delete" });
  } catch (error) {
    res.status(500).send("somthing wrong!");
    console.log(error);
    process.exit(1);
  }
};

exports.createTodo = async (req, res) => {
  const userTodo = new db.Todo({
    name: req.body.name,
    details: req.body.details,
  });
  const newTodo = await userTodo.save();
  res.status(201).json({
    succes: true,
    data: newTodo,
  });
};

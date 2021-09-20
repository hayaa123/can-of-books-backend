"use strict";

const { BookModel } = require("../Model/Book");

let createBookController = async (req, res) => {
  let { title, description, status, email } = req.body;
  let newBook = new BookModel({
    title: title,
    description: description,
    status: status,
    email: email,
  });
  newBook.save();

  let bookList = await BookModel.find({});
  res.status(201).json(bookList);
};

module.exports = {createBookController};

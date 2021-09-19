"use strict";
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
});

const BookModel = mongoose.model("book", bookSchema);

let seedBook = () => {
  let newBooks = [
    {
      title: "48 laws of power",
      description:
        "a book authered by Rob Greene and it talks about political stuff",
      status: "lorem",
      email: "123@gmail.com",
    },
    {
      title: "48 laws of power",
      description:
        "a book authered by Rob Greene and it talks about political stuff",
      status: "lorem",
      email: "123@gmail.com",
    },
    {
      title: "48 laws of power",
      description:
        "a book authered by Rob Greene and it talks about political stuff",
      status: "lorem",
      email: "123@gmail.com",
    },
    {
      title: "48 laws of power",
      description:
        "a book authered by Rob Greene and it talks about political stuff",
      status: "lorem",
      email: "123@gmail.com",
    },
  ];
    let books =[];
    newBooks.map((item) => {
    books.push( new BookModel({
      title: item.title,
      description: item.description,
      status: item.status,
      email: item.email,
    }));
  });
  books.save();
};

// This creates our model from the above schema, using mongoose's model method

// Export the Article model
module.exports = {
  BookModel,
  seedBook,
};

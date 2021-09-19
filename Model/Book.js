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
  
//     let books =[];
//     newBooks.map((item) => {
//     books.push( new BookModel({
//       title: item.title,
//       description: item.description,
//       status: item.status,
//       email: item.email,
//     }));
//   });

let newBook1=new BookModel({
    title: "48 laws of power",
    description:
      "a book authered by Rob Greene and it talks about political stuff",
    status: "lorem",
    email: "123@gmail.com",
  })
  let newBook2= new BookModel({
    title: "4wer",
    description:
      "a book authered by Rob Greene and it talks about political stuff",
    status: "lorem",
    email: "123@gmail.com",
  })
  
  let newBook3= new BookModel(
    {
        title: "48power",
        description:
          "a book authered by Rob Greene and it talks about political stuff",
        status: "lorem",
        email: "123@gmail.com",
      }
  )
 
newBook1.save();
newBook2.save();
newBook3.save();

};

// This creates our model from the above schema, using mongoose's model method

// Export the Article model
module.exports = {
  BookModel,
  seedBook,
};

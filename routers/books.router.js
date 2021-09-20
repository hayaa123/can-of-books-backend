"use strict";

const express = require("express");
const router = express.Router();
const {BookModel , seedBook} = require('../Model/Book');
const {createBookController} = require('../controllers/createBook.controller')

// Get

router.get("/", (req, res) => {
  BookModel.find().then((data) => {
    res.json(data);
  });
});

// Post

router.post("/", createBookController)

module.exports=router;
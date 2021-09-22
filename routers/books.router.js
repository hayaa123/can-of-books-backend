"use strict";

const express = require("express");
const router = express.Router();
const { BookModel, seedBook } = require("../Model/Book");
const {
  createBookController,
} = require("../controllers/createBook.controller");
const {
  deleteBookController,
} = require("../controllers/deleteBook.controller");
const {
  UpdateBookController,
} = require("../controllers/UpdateBook.controller");

// Get

router.get("/", (req, res) => {
  BookModel.find().then((data) => {
    res.json(data);
  });
});

// Post

router.post("/", createBookController);

// Delete

router.delete("/:id", deleteBookController);

// update
router.put("/:id", UpdateBookController);

module.exports = router;

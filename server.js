"use strict";

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;
const MONGO_ATLAS_SERVER = process.env.MONGO_ATLAS_SERVER;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(`${MONGO_ATLAS_SERVER}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// const { seedBook } = require("./Model/Book");

const booksRouter = require("./routers/books.router");

app.use("/books", booksRouter);

app.get("/test", (request, response) => {
  response.send("test request received");
});

// app.get('/seed-data',(req,res)=>{
//     seedBook();
//     res.json({
//         "message":"Author Object Created succefully"
//     })
// })

app.listen(PORT, () => console.log(`listening on ${PORT}`));

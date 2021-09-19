'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const PORT =process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER
const app = express();
app.use(cors());
mongoose.connect(`${MONGO_SERVER}/books`,{useNewUrlParser: true, useUnifiedTopology: true});
// const PORT = process.env.PORT || 3001;
const {BookModel , seedBook} = require('./Model/Book')

app.get('/test', (request, response) => {

  response.send('test request received')

})
app.get('/books',(req,res)=>{
    // seedBook()
    BookModel.find().then(data=>{
        res.json(data);
})})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
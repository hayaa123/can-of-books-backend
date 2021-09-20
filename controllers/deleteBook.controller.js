"use strict";

const { BookModel } = require("../Model/Book");

let deleteBookController = async (req, res) => {
    let id=req.params.id;
    BookModel.findByIdAndDelete(id,async (err,data)=>{
        if(err){
            res.status(500).send("an error occured");
        }
        let bookList= await BookModel.find({});
        res.json(bookList);
           
    })
};

module.exports={deleteBookController};
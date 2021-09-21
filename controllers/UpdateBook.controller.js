'use strict'
const {BookModel} = require('../Model/Book')

let UpdateBookController = async (req,res)=>{
    let id = req.params.id
    let body = req.body

    BookModel.findOne({_id:id}).then((data)=>{
        data.title = body.title
        data.description = body.description
        data.status = body.status
        data.email = body.email
        data.save()
    })
    // res.json()
    let updated_data = await BookModel.find({})
    res.status(200).json(updated_data)
    
}

module.exports = {
    UpdateBookController
}
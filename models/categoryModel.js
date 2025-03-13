const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
   category_name: {
      type: String,
      required: true,
      trimi: true
   }

},{timestamps: true})

module.exports = mongoose.model("Category",categorySchema)


const mongoose = require('mongoose')
const config = require('../utils/config')

mongoose.connect(config.mongoUrl, { useNewUrlParser: true }).then(res => {
  console.log('Connected to MongoDB')
}).catch((error) => {
  console.log('Error connecting to MongoDB', error.message)
})

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

module.exports = mongoose.model('Blog', blogSchema)
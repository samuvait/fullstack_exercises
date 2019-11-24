require('dotenv').config()

let PORT = process.env.PORT || 3001
let mongoUrl = process.env.MONGODB_URI

module.exports = {
  PORT,
  mongoUrl
}
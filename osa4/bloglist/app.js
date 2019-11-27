const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const mongoose = require('mongoose')
const config = require('./utils/config')
const middleware = require('./utils/middleware')


app.use(cors())
app.use(bodyParser.json())
app.use(middleware.tokenExtractor)

mongoose.connect(config.mongoUrl, { useNewUrlParser: true }).then(res => {
  console.log('Connected to MongoDB')
}).catch((error) => {
  console.log('Error connecting to MongoDB', error.message)
})

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app
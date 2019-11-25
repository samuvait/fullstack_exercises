const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)

  try {
    const saved = await blog.save()
    response.status(201).json(saved.toJSON)
  } catch (exception) {
    console.log('exception', exception)
  }
})

module.exports = blogsRouter
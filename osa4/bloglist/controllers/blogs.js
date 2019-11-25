const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.post('/', async (request, response) => {
  const blog = request.body
  const newBlog = new Blog({
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes || 0
  })

  try {
    const saved = await newBlog.save()
    response.status(201).json(saved.toJSON())
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
})

module.exports = blogsRouter
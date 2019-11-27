require('dotenv').config()
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
    .populate('user', { username: 1, name: 1 })

  try {
    response.json(blogs.map(blog => blog.toJSON()))
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
})

blogsRouter.post('/', async (request, response) => {
  const blog = request.body
  console.log('blog', )

  const token = response.token
  console.log('token', token)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    console.log('user', user)

    const newBlog = new Blog({
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes || 0,
      user: user._id
    })

    const savedBlog = await newBlog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.status(201).json(savedBlog.toJSON())
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
})

blogsRouter.delete('/:id', async (request, response) => {
  try {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch {
    response.status(400).json({ error: error.message })
  }
})

blogsRouter.put('/:id', async (request, response) => {
  const blog = request.body
  const id = request.params.id
  const newBlog = new Blog({
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes || 0
  })

  try {
    const updatedBlog = await Blog.findOneAndUpdate({ _id: id }, { likes: newBlog.likes }, { new: true })
    response.json(updatedBlog.toJSON())
  } catch (error) {
    response.status(400).json({ error: error.message })
  }
})

module.exports = blogsRouter
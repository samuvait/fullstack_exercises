const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const helper = require('./test_helper')

const api = supertest(app)

beforeEach(async () => {
  await Blog.remove({})

  const blogObjects = helper.blogsExample
    .map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

describe('Get blogs works correctly', () => {
  test('Returns json format', async () => {
    await api.get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('Correct amount of blogs returned', async () => {
    const res = await api.get('/api/blogs')
    // console.log('resbody', res.body)
    expect(res.body.length).toBe(helper.blogsExample.length)
  })

  test('Contains blog with certain title', async () => {
    const res = await api.get('/api/blogs')
    const titles = res.body.map(blog => blog.title)

    expect(titles).toContain('Go To Statement Considered Harmful')
  })

  test('Id is named "id" not "_id"', async () => {
    const res = await api.get('/api/blogs')
    // console.log('id', res.body[0])
    expect(res.body[0].id).toBeDefined()
  })
})

describe('Post blogs works correctly', () => {
  const newBlog = helper.exWOne

  test('Adding a new blog works', async () => {
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDB()
    expect(blogsAtEnd.length).toBe(helper.blogsExample.length + 1)

    const titles = blogsAtEnd.map(blog => blog.title)
    expect(titles).toContain('Raising children')
  })

  test('Adding a new blog without likes creates one with 0', async () => {
    const noLikes = {title: 'Raising children', author: 'Maija Poppanen', url: 'www.kappa.com'}

    const res = await api
      .post('/api/blogs')
      .send(noLikes)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    // console.log('res', res.body)
    expect(res.body.likes).toBe(0)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
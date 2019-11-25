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
})



afterAll(() => {
  mongoose.connection.close()
})
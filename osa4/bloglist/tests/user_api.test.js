const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')
const helper = require('./test_helper')

const api = supertest(app)

beforeEach(async () => {
  await User.remove({})

  const userObjects = helper.usersExample.map(user => new User(user))
  const promiseArray = userObjects.map(user => user.save())
  await Promise.all(promiseArray)
})

describe('Get users works correctly', () => {
  test('Returns json format', async () => {
    await api.get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})

describe('Creating a user works correctly', () => {
  test('Adding one user works correctly', async () => {
    const res = await api.post('/api/users')
      .send(helper.oneUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDB()
    expect(usersAtEnd.length).toBe(helper.usersExample.length + 1)

    const usernames = usersAtEnd.map(user => user.username)
    expect(usernames).toContain('tauno')
  })

  test('Adding user with invalid password rejects', async () => {
    const res = await api.post('/api/users')
      .send(helper.invalidpw)
      .expect(400)

      expect(res.body.error).toContain('password not valid')
  })

  test('Adding user with invalid username rejects', async () => {
    const res = await api.post('/api/users')
      .send(helper.invalidname)
      .expect(400)

      expect(res.body.error).toContain('User validation failed: username: Path `username`')
  })
})
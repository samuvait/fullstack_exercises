const listHelper = require('../utils/list_helper')
const helper = require('./test_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

blogsExample = helper.blogsExample

const blogLikeSum = 36

exWOne = {_id: "5a422a851b54a676234d17f7", title: 'Example', author: 'Maija Poppanen', url: 'www.kappa.com', likes: 10, __v: 0}

const favouriteExample = {
  title: "Canonical string reduction",
  author: "Edsger W. Dijkstra",
  likes: 12
}

describe('Number of likes', () => {
  test('Correctly sums likes', () => {
    expect(listHelper.totalLikes(blogsExample)).toBe(blogLikeSum)
  })

  test('Handles empty list', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('Handles list with one item', () => {
    expect(listHelper.totalLikes([{title: '', author: '', url: '', likes: 10}])).toBe(10)
  })
})

describe('Favourite Blog', () => {
  test('Favourite blog from multiple', () => {
    expect(listHelper.favouriteBlog(blogsExample)).toEqual(favouriteExample)
  })

  test('Handles empty list', () => {
    expect(listHelper.favouriteBlog([])).toEqual({})
  })

  test('Handles list with one item', () => {
    let ex2 = {title: 'Example', author: 'Maija Poppanen', likes: 10}

    expect(listHelper.favouriteBlog([exWOne])).toEqual(ex2)
  })
})

describe('Most blogs', () => {
  test('Favourite blog from multiple', () => {
    expect(listHelper.mostBlogs(blogsExample)).toEqual({"author": "Robert C. Martin", "blogs": 3})
  })

  test('Favourite blog from list with one', () => {
    expect(listHelper.mostBlogs([exWOne])).toEqual({"author": "Maija Poppanen", "blogs": 1})
  })

  test('Favourite blog from empty list', () => {
    expect(listHelper.mostBlogs([])).toEqual({})
  })
})

describe('Most Likes', () => {
  test('Most Likes from multiple', () => {
    expect(listHelper.mostLikes(blogsExample)).toEqual({"author": "Edsger W. Dijkstra", "likes": 17})
  })

  test('Favourite blog from list with one', () => {
    expect(listHelper.mostLikes([exWOne])).toEqual({"author": "Maija Poppanen", "likes": 10})
  })

  test('Favourite blog from empty list', () => {
    expect(listHelper.mostLikes([])).toEqual({})
  })
})
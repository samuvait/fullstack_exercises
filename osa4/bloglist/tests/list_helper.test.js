const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

const blogsExample = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

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
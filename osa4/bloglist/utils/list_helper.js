const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => {
      return sum += blog.likes
    }, 0)
}

const favouriteBlog = (blogs) => {
  return blogs.length === 0
    ? {}
    : blogs.map(blog => { return ({ title: blog.title, author: blog.author, likes: blog.likes }) })
      .reduce((biggest, blog) => {
        return biggest.likes > blog.likes
          ? biggest
          : blog
      }, {})
}

const mostBlogs = (blogs) => {
  // console.log('ungrouped', blogs)
  if (blogs.length === 0) {
    return {}
  }

  let groupedBlogs = _.groupBy(blogs, blog => blog.author)
  return _.reduce(groupedBlogs, (mostWritten, author) => {
    return mostWritten.length > author.length
      ? mostWritten
      : {author: author[0].author, blogs: author.length}
  }, [])
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return {}
  }

  let groupedBlogs = _.groupBy(blogs, blog => blog.author)
  return _.reduce(groupedBlogs, (mostLiked, author) => {
    let likes = author.reduce((sum, blog) => {
      // console.log('sum', sum, 'blog likes', blog.likes)
      return sum + blog.likes
    }, 0)
    return mostLiked.likes > likes
      ? mostLiked
      : {author: author[0].author, likes: likes}
  }, {likes: 0})
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}
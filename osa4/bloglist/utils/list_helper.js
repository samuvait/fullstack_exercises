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

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}
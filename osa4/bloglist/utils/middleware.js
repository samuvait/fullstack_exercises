const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    response.token = authorization.substring(7)
    console.log('res', response.token)
  }
  next()
}

module.exports = {tokenExtractor}
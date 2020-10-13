const exampleHandler = async (req, res) => {
  const data = {
    message: 'example',
  }
  res.setHeader('Content-Type', 'application/json')
  console.log(data)
  return res.json(data)
}

module.exports = exampleHandler

const http = require('http')
const os = require('os')
const port = process.env.PORT || 8080

const handler = function (req, res) {
  console.log(`Received request from: ${req.connection.remoteAddress}`)
  res.writeHead(200)
  res.end(`You have've hit ${os.hostname()}`)
}

const server = http.createServer(handler)

console.log(`Listening to port *:${port}`)
server.listen(port)

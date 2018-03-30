const http = require('http')
const os = require('os')

console.log('kubia server starting...')

const handler = function(request, response) {
	console.log(`Received request from ${request.connection.remoteAddress}`)
	response.writeHead(200)
	response.end(`This is v2 running in pod ${os.hostname()}\n`)
}

const www = http.createServer(handler)
www.listen(8080)
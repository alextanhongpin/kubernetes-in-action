const http = require('http')
const os = require('os')

let requestCount = 0
console.log('kubia server starting...')

const handler = function (request, response) {
	console.log(`received request from ${request.connection.remoteAddress}`)
	if (++requestCount >= 5) {
		response.writeHead(500)
		response.end(`some internal server occured. this is pod ${os.hostname()}\n`)
		return
	}

	response.writeHead(200)
	response.end(`this is v3 running in pod ${os.hostname()}\n`)
}

const www = http.createServer(handler)
www.listen(8080)
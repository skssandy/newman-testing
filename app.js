var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.send('CICD Pipeline testing successfull')
})

var server = app.listen(5000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('Server listening at http://%s:%s', host, port)
})

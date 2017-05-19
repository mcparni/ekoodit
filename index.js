var fs = require('fs');
var dataArray = [];
var express = require('express');
var app = express();
var dataSet = require("./data/dataset.js");
var path    = require("path");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

fs.readFile('data/ekoodit.json', 'utf8', function (err, data) {
	if (err) throw err;
	var obj = JSON.parse(data);
	dataArray = obj.eNumbers;
	
	app.use(express.static(__dirname + '/public'));

	app.get('/',function(req,res){
  		res.sendFile(path.join(__dirname+'/public/index.html'));
  		
	});
	app.get('/result',function(req,res){
  		res.sendFile(path.join(__dirname+'/public/result.html'));
  		
	});
	
	io.on('connection', function(socket){
		socket.on('search', function(code){
    		code = code.toUpperCase();
    		var res = dataSet.listByCode(dataArray, code);
    		
    		if(res.length == 0)
    			io.emit('results', 0);
    		else
    			io.emit('results', res[0]);
    		
  		});
	});

	http.listen(port, function(){
		console.log('kuunnellaan porttia *:' + port + '. Mene selaimellasi osoitteeseen: localhost:' + port);
	});

});

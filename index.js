var fs = require('fs');
var dataArray = [];
var express = require('express');
var app = express();
var dataSet = require("./dataset.js");
var path    = require("path");
var http = require('http').Server(app);
var io = require('socket.io')(http);


fs.readFile('ekoodit.json', 'utf8', function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    dataArray = obj.eNumbers;

	app.get('/',function(req,res){
  		res.sendFile(path.join(__dirname+'/index.html'));
  		
	});
	app.get('/result',function(req,res){
  		res.sendFile(path.join(__dirname+'/result.html'));
  		
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

	http.listen(3000, function(){
		console.log('kuunnellaan porttia *:3000');
	});

});

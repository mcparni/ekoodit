var fs = require('fs');
var dataArray = [];
var express = require('express');
var app = express();
var urlPrefix = 'https://www.evira.fi';
var dataSet = require("./dataset.js");
var path    = require("path");
var http = require('http').Server(app);
var io = require('socket.io')(http);


fs.readFile('ekoodit.json', 'utf8', function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    dataArray = obj.eNumbers;

    
	app.listen(3000, function () {
	  console.log('Example app listening on port 3000!')
	});
	app.get('/',function(req,res){
  	res.sendFile(path.join(__dirname+'/index.html'));
  		
	});
	

});

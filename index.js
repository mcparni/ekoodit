var fs = require('fs');
var dataArray = [];
var urlPrefix = 'https://www.evira.fi';


/*
	returns an array of items according to search letter
	parameter key is the letter to search
*/
var listByAlphabet = function(key) {
	return dataArray.filter(function(item,index){
       	if(item.SearchLetter === key) {
       		return item;
       	}
    });
};

/*
	returns a set of all letter keys for titles
	helper to construct menu
*/
var listAllKeys = function() {
	var values = new Set();
	var newArr = dataArray.filter(function(item){
    	values.add(item.SearchLetter);
	});
	return values;
};

/*
	returns a set of all titles of ecodes
*/
var listTitles = function() {
	var values = new Set();
	var newArr = dataArray.filter(function(item){
    	values.add(item.ENumberName);
	});
	return values;
};

/*
	returns a set of all titles of ecodes
*/
var listCodes = function() {
	var values = new Set();
	var newArr = dataArray.filter(function(item){
    	values.add(item.ENumber);
	});
	return values;
};


fs.readFile('ekoodit.json', 'utf8', function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    dataArray = obj.eNumbers;

});

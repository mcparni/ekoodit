

module.exports = {
	
	listByAlphabet : function(dataArray, key) {
		return dataArray.filter(function(item,index){
	       	if(item.SearchLetter === key) {
	       		return item;
	       	}
	    });
	},


	listAllKeys : function(dataArray) {
		var values = new Set();
		var newArr = dataArray.filter(function(item){
	    	values.add(item.SearchLetter);
		});
		return values;
	},


	listByTitles : function(dataArray) {
		return dataArray.filter(function(item,index){
	       	return item.ENumberName;
	       	
	    });
	},

	listByTitle : function(dataArray, title) {
	    return dataArray.filter(function(item,index){
	       	if(item.ENumberName === title) {
	       		return item;
	       	}
	    });
	},


	listByCodes : function(dataArray) {
		return dataArray.filter(function(item,index){
	       	return item.ENumber;
	    });
	},


	listByCode : function(dataArray, code) {
	    return dataArray.filter(function(item,index){
	       	if(item.ENumber === code) {
	       		return item;
	       	}
	    });
	}

};


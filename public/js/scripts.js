$(function () {
	var socket = io();
	$('form').submit(function(){
		socket.emit('search', $('#m').val());
		$('#m').val('');
	
		return false;
	});
	socket.on('results', function(res){
		$('#results').html();
		if(res == 0) {
			$('#results').html("Ei tuloksia");
			return;
		}

    	var urlPrefix = 'https://www.evira.fi';
    	var url = urlPrefix + res.FriendlyUrl;
    	var ename = res.ENumberName;
    	var enumber = res.ENumber;
    	var ecolor = res.Color;
    	var edescription = res.Description;
    	var eADI = res.ADI;
    	var eGroups = res.AdditiveGroups;
    	var eprops = res.Properties;

    	if(ecolor == null)
    		ecolor = "-";

    	if(eprops == null)
    		eprops = "-";

    	if(eGroups.length == 0)
    		eGroups = "-";
    	else
    		eGroups = eGroups[0];

    	$.get('/result', function(data) {
    		$('#results').html(data);
		    $("#results .ename").html(ename);
		    $("#results .ecolor").html(ecolor);
		    $("#results .edescription").html(edescription);
		    $("#results .eADI").html(eADI);
		    $("#results .eGroups").html(eGroups);
		    $("#results .eprops").html(eprops);
		    $("#results .elink a").attr("href", url);
		});
    });
});
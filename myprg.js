$(document).ready(function(){
	$.getJSON('Peoples.json', function(info){
		document.writeln(info.peoples[0].first_name);
	})
});
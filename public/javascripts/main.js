$(document).on('ready', function(){
	console.log('test');
	$('#load-button').on('click', function(){

		$.get('/models/countries', function(country){
			$('#country-name').text(country.name);
		});
	});


});
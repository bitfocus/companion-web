$(function() {

	$('#download-location').attr('href', 'https://github.com/bitfocus/companion/releases/')
	$('#download-location').html("<strong>Companion download</strong>");

	$.getJSON( "https://raw.githubusercontent.com/bitfocus/companion/master/package.json", function( data ) {
		$('#download-location').attr('href', 'https://github.com/bitfocus/companion/releases/tag/v' + data.version)
		$('#download-location').html("<strong>Companion-v"+data.version+"</strong> (Mac & Windows)");
	});


});

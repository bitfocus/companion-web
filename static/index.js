$(function() {

	$('#download-location').attr('href', 'https://github.com/bitfocus/companion/releases/')
	$('#download-location').html("<strong>Mac</strong> companion-osx.dmg");

	$.getJSON( "https://raw.githubusercontent.com/bitfocus/companion/master/package.json", function( data ) {
		$('#download-location').attr('href', 'https://github.com/bitfocus/companion/releases/tag/v' + data.version)
		$('#download-location').html("<strong>Mac</strong> companion-v"+data.version+"-beta-osx.dmg");
	});


});

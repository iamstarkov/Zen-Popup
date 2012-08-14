$(function() {
	
var precompiled = $('#css_precompiled').html(),
	aftercompiled = precompiled,
	customization = $('#css_customization');


var radius = '10px',
	size = '38px',
	margin = '10px',
	bg = 'green',
	shadow = '0 0 3px green';

setTimeout( function() {
	aftercompiled = precompiled
		.replace(/%radius%/g, radius)
		.replace(/%size%/g, size)
		.replace(/%margin%/g, margin)
		.replace(/%bg%/g, bg)
		.replace(/%shadow%/g, shadow);

	customization.html( aftercompiled );
}, 500);


});
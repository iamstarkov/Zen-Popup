$(function() {
	
var precompiled = $('#css_precompiled').html(),
	aftercompiled = precompiled,
	customization = $('#css_customization'),
	form = $('#simple-form');

// default values
var radius = '2px',
	size = '18px',
	margin = '5px',
	bg = '#f1f1f1',
	shadow = '0 0 3px rgba(0, 0, 0, .35)';

var f_radius = $('input[name="radius"]').val(radius),
	f_size = $('input[name="size"]').val(size),
	f_margin = $('input[name="margin"]').val(margin),
	f_bg = $('input[name="bg"]').val(bg),
	f_shadow = $('input[name="shadow"]').val(shadow);


function reload_css() {
	f_radius = $('input[name="radius"]').val(),
	f_size = $('input[name="size"]').val(),
	f_margin = $('input[name="margin"]').val(),
	f_bg = $('input[name="bg"]').val(),
	f_shadow = $('input[name="shadow"]').val();

	aftercompiled = precompiled
		.replace(/%radius%/g, f_radius)
		.replace(/%size%/g, f_size)
		.replace(/%margin%/g, f_margin)
		.replace(/%bg%/g, f_bg)
		.replace(/%shadow%/g, f_shadow);
	customization.html( aftercompiled );
}

reload_css();

form.on('change keypress keyup blur', 'input', function() {
	reload_css();
});



});
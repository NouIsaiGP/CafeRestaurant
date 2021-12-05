$(document).ready(function() {
	

	$(window).scroll(function(event) {
		var windowWidth = $(window).width();

		var scroll = $(window).scrollTop();

		$('header .textos').css({
			'transform': 'translate(0px,' + scroll / 2 + '%)'
		});

		$('.acerca-de article').css({
			'transform': 'translate(0px, -' + scroll / 4 + '%)'
		});




	});



});

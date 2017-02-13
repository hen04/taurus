$(function(){

	$('.kitchen-modern').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});

	$('.kitchen-style__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});

	$('.kitchen-style__slider:first').addClass('open');
	$('.kitchen-style__menu li:first').addClass('active');
	$('.js-menu').on('click', function() {
		var style = $(this).data('style');
		$('.kitchen-style__slider').removeClass('open');
		$('.kitchen-style--'+style).addClass('open');
		$('.kitchen-style__menu li').removeClass('active');
		$(this).addClass('active');
	});

	$('.inp-phone').mask('+7(999) 999 99 99');

	// Ваша кухня в деталях
	$('.js-detail').on('click', function(){
		var info = $('.kitchen-detail__info'),
				detail = $(this).data('info');
		if ( !info.hasClass('open') ) {
			$('.kitchen-detail__info').addClass('open');
			$('.kitchen-detail--info-'+detail).addClass('open');
			$('.kitchen-detail__item').removeClass('active');
			$(this).addClass('active');
		} else {
			$('.kitchen-detail__info-item').removeClass('open');
			$('.kitchen-detail--info-'+detail).addClass('open');
			$('.kitchen-detail__item').removeClass('active');
			$(this).addClass('active');
		}
	});

	$('.js-close').on('click', function(){
		$('.kitchen-detail__info, .kitchen-detail__info-item').removeClass('open');
		$('.kitchen-detail__item').removeClass('active');
	});

	$('.js-modal').on('click', function(e){
		$('.box-modal').arcticmodal();
		e.preventDefault();
	});
});

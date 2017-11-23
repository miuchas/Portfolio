$(function() {
	var type = "";
	$('.progress-radial').hover( function(){
		var type_text = "";

		if( $(this).hasClass('web') ){
			type = "web";
		}
		if( $(this).hasClass('desktop') ){
			type = "desktop";
		}
		if( $(this).hasClass('bd') ){
			type = "bd";
		}
		if( $(this).hasClass('mobile') ){
			type = "mobile";
		}
		$('.progress-radial').removeClass('active');
		$('.progress-radial.'+type).addClass('active');

		switch(type) {
	    case 'web'    : type_text = 'Web'            ; break;
	    case 'desktop': type_text = 'Desktop'        ; break;
	    case 'bd'     : type_text = 'Banco de dados' ; break;
	    case 'mobile' : type_text = 'Mobile'         ; break;
		}
		$(".topico .tipo-aptidao").text(type_text);
	});
	// function(){
  //   $('.progress-radial.'+type).removeClass('active');
  // });
});

//skilltree---------------------------------------------------------------------

// on page load...
moveProgressBar();
// on browser resize...
$(window).resize(function() {
    moveProgressBar();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
	$('.progress-wrap').each(function(index, progress) {
    var getPercent = ($(this).data('progress-percent') / 100);
    var getProgressWrapWidth = $(this).width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2500;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $(this).find('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);

	});
}

// var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
// var getProgressWrapWidth = $('.progress-wrap').width();
// var progressTotal = getPercent * getProgressWrapWidth;
// var animationLength = 2500;
//
// // on page load, animate percentage bar to data percentage length
// // .stop() used to prevent animation queueing
// $('.progress-bar').stop().animate({
//     left: progressTotal
// }, animationLength);

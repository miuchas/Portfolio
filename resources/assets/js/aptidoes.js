jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});

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

$(document).ready(function() {
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 10){
			$('#nav').css({ 'padding' : '10px 25px' });
		} else if($(this).scrollTop() == 0){
			$('#nav').css({ 'padding' : '25px 35px' });
		}
	})

	$('.lihat').click(function(){
		$('#inti').ScrollTo({duration : 200});
	});

});
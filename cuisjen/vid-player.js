$(function() {
	
	$(window).scroll(function() {
	   if ($(this).scrollTop() >= 300) {
	      $('nav').addClass('change');
	   }
	   else {
	      $('nav').removeClass('change');
	   }
	});
	
	$('.mobile-nav').click(function() {
		$('.nav-right').toggleClass('toggle');
	})
	
	$('.showVid').click(function() {
		$('.videoModal').addClass('toggle');
		$('.videoModal iframe').addClass('OpenVideo');
	});
	$('.videoModal').click(function() {
		$('.videoModal').removeClass('toggle');
		$('.videoModal iframe').removeClass('OpenVideo');
	});
	
	var headerHeight = $('nav').outerHeight();
	$('.smooth-scroll').click(function(e) {
		var linkHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight + 1
		}, 700);
		e.preventDefault();
	})
	
});
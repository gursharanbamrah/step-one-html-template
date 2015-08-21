(function($){
	$("#testimonial-slider").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		navigation:true,
		autoHeight : true
	});

	//show Hide Search bar
	var searchEventElement = $(".show-search");
	var searchTargetElement = $(".large-search");
	searchEventElement.click(function(e){
		e.stopPropagation();
		searchTargetElement.toggleClass('show');
		$(this).parent('li').toggleClass('active');	
	});
	searchTargetElement.on('click',function(e){
		e.stopPropagation();
	})
	$(document).click( function(){
		searchTargetElement.removeClass('show');
		searchEventElement.	parent('li').removeClass('active');	
	});


		var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
})(jQuery)
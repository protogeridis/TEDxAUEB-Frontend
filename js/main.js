$(document).ready(function(){
	$(".nav-button").click(function(e) {
		e.preventDefault();
		var targetid = $(this).attr('href');
		$('html, body').animate({
			scrollTop: ($(targetid).offset().top - 45)
		}, 600, 'easeInOutQuart', function(){
		});
	});

	$.fn.waypoint.defaults = {
		context: window,
		continuous: true,
		enabled: true,
		horizontal: false,
		offset: 120,
		triggerOnce: true
	}

	$('#flickr-feed').jflickrfeed({
		limit: 20,
		qstrings: {
			id: '94624116@N08'
		},
		itemTemplate: 
		'<li class="gallery-thumb">' +
		'<a target="_blank" href="{{link}}"><img src="{{image}}" alt="{{title}}" /></a>' +
		'</li>'
	});

	(function() {
	$.fn.bgscroll = $.fn.bgScroll = function( options ) {
		
		if( !this.length ) return this;
		if( !options ) options = {};
		if( !window.scrollElements ) window.scrollElements = {};
		
		for( var i = 0; i < this.length; i++ ) {
			
			var allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			var randomId = '';
			for( var l = 0; l < 5; l++ ) randomId += allowedChars.charAt( Math.floor( Math.random() * allowedChars.length ) );
			
				this[ i ].current = 0;
				this[ i ].scrollSpeed = options.scrollSpeed ? options.scrollSpeed : 70;
				this[ i ].direction = options.direction ? options.direction : 'h';
				window.scrollElements[ randomId ] = this[ i ];
				
				eval( 'window[randomId]=function(){var axis=0;var e=window.scrollElements.' + randomId + ';e.current -= 1;if (e.direction == "h") axis = e.current + "px 0";else if (e.direction == "v") axis = "0 " + e.current + "px";else if (e.direction == "d") axis = e.current + "px " + e.current + "px";$( e ).css("background-position", axis);}' );
														 
				setInterval( 'window.' + randomId + '()', options.scrollSpeed ? options.scrollSpeed : 70 );
			}
			
			return this;
		}
})(jQuery);

	
 	



	$('#intro').waypoint(function(direction) {
	$("#speakers-value").animateNumber(01);
	$("#delegates-value").animateNumber(20);
	$("#volunteers-value").animateNumber(20);
	$("#venue-value").animateNumber(40);
	$("#workshops-value").animateNumber(55);
	$("#universities-value").animateNumber(10);

}, {offset:0});


});

(function($) {
		$.fn.animateNumber = function(to) {
			var $ele = $(this),
			num = parseInt($ele.html()),
			up = to > num,
			num_interval = Math.abs(num - to) / 90;

			var loop = function() {
				num = up ? Math.ceil(num+num_interval) : Math.floor(num-num_interval);
				if ( (up && num > to) || (!up && num < to) ) {
					num = to;
					clearInterval(animation)
				}
				$ele.html(num);
			}

			var animation = setInterval(loop, 15);
		}
	})(jQuery)


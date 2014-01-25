$(document).ready(function(){
	$(".nav-button").click(function(e) {
		e.preventDefault();
		var targetid = $(this).attr('href');
		$('html, body').animate({
			scrollTop: ($(targetid).offset().top - 45)
		}, 600, 'easeInOutQuart', function(){
		});
	});

	$('.bxslider').bxSlider({
  pagerCustom: '#bx-pager',
  mode:'fade'
});

	$.fn.waypoint.defaults = {
		context: window,
		continuous: true,
		enabled: true,
		horizontal: false,
		offset: 120,
		triggerOnce: true
	}


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


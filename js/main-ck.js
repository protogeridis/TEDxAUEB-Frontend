$(document).ready(function(){$(".nav-button").click(function(e){e.preventDefault();var t=$(this).attr("href");$("html, body").animate({scrollTop:$(t).offset().top-45},600,"easeInOutQuart",function(){})});$(".bxslider").bxSlider({pagerCustom:"#bx-pager",mode:"fade"});$.fn.waypoint.defaults={context:window,continuous:!0,enabled:!0,horizontal:!1,offset:120,triggerOnce:!0}});(function(e){e.fn.animateNumber=function(t){var n=e(this),r=parseInt(n.html()),i=t>r,s=Math.abs(r-t)/90,o=function(){r=i?Math.ceil(r+s):Math.floor(r-s);if(i&&r>t||!i&&r<t){r=t;clearInterval(u)}n.html(r)},u=setInterval(o,15)}})(jQuery);
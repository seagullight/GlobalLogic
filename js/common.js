$(document).ready(function() {
	$("section#corusel button").mouseover(function(){
			$(this).addClass("animated bounce");
			$(this).find(".downscroll2").addClass("animated bounce");
			
			
	});
	
	
	$(".wraperrng-box").mouseover(function(){
			var $str = $(this).find("path").css("stroke");
			$(this).css({"background-color": $str});
			$(this).find("path").css({"stroke":"white", "fill":"white"});
	});
	$(".wraperrng-box").mouseout(function(){
			var $str = $(this).css("background-color");
			$(this).css({"background-color": "white"});
			$(this).find("path").css({"stroke":$str, "fill":$str});
	});

		$("button.downscroll").click(function(){
			
			var $scrol = $(window).height();
			$('html, body').animate({scrollTop:$scrol}, 1000);
			

		});
		
		$(window).scroll(function(){
			var $sc = $(window).scrollTop();
				if($sc > 50){
					$("button.downscroll").hide(300);
					$("nav").addClass("navbar-default").css({"opacity":"0.8","box-shadow":"0 0 10px rgba(0,0,0,0.5)"});	
					$("svg").css({"fill":"black"});
					$("ul.navbar-nav li:last a").css({"color": "#ff6600"});
				}
				else if($sc < 50){
					$("button.downscroll").show();
					$("nav").removeClass("navbar-default");
					$("svg").css({"fill":"white"});
					$("ul.navbar-nav li:last a").css({"color": "white"});
				};



		});				
							
							
						
		   });
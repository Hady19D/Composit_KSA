// <reference path="../../jquery-1.8.2.js" />

function Page2() {
	var self = this;
	this.init = function() {
		self.startDisplay();

		$(".homediv").bind("mousedown", function(e) {
			com.veeva.clm.gotoSlide("Composit_KSA_2020_001.zip", "");
		});
		$(".ssidiv").bind("mousedown", function(e) {
			com.veeva.clm.gotoSlide("Composit_KSA_2020_009.zip", "");
		});

		$(".next").bind("mousedown", function(e) {
			$('.pic1,.next').fadeOut();
			$('.blackscreen').fadeIn(function(){
				$('.pic2').delay(600).fadeIn(function(){
					setTimeout(function() {
						$('.bg2').fadeIn(function(){
							$(".pic2").attr('src', 'assets/img/p2/pic3.png');
							$('.pic2').animate({'top':'402px','right':'457px','width':'110px'},2000,function(){});
							$('.blackscreen').fadeOut(function(){
								$('.pic4,.pic5,.pic6').fadeIn(function(){
									$('.nextdiv').fadeIn(function(){
										$('.next1').delay(500).fadeIn(function(){
										});
									});
								});
							});
							
						});
					}, 1000);
				});
			});
		});


		$(".next1").bind("mousedown", function(e) {
			$('.nextdiv,.next1').hide();
			$('.nextdiv2,.next2').show();
			$('.pic7').fadeIn();
			$('.pic4,.pic2').animate({'top':'770px'},2000,function(){});
			$(".pic6").attr('src', 'assets/img/p2/pic8.png');
			$('.pic6').animate({'top':'402px','right':'-115px','width':'1291px'},2000,function(){});
			$(".pic5").attr('src', 'assets/img/p2/pic10.png');
			$('.pic5').animate({'top':'195px','right':'-9px','width':'1020px'},2000,function(){});
			$('.pic7').animate({'top':'112px','right':'80px','width':'771px'},2000,function(){});
			$('.next1').fadeOut();
		});

		$(".next2").bind("mousedown", function(e) {
			$('.nextdiv2,.nextdiv,.next2').hide();
			$('.nextdiv3,.next3').show();
			$('.pic6').animate({'top':'770px'},2000,function(){});
			$(".pic5").attr('src', 'assets/img/p2/pic11.png');
			$('.pic5').animate({'top':'315px','right':'-59px','width':'1160px'},2000,function(){});
			$(".pic7").attr('src', 'assets/img/p2/pic12.png');
			$('.pic7').animate({'top':'172px','right':'-6px','width':'1031px'},2000,function(){
				$('.pic13').fadeIn();
			});
		});

		$(".next3").bind("mousedown", function(e) {
			$('.bg2,.next3').fadeOut();
			$('.bg3,.next4').fadeIn();
			$('.pic13').animate({'top':'451px','right':'571.8px','width':'54.5px'},2000,function(){
				$('.pic13').fadeOut();
				$('.pic14,.pic15').fadeIn();
			});
			$('.nextdiv3').hide();
			$('.pic7,.pic5').fadeOut(700);
		});

		$(".next4").bind("mousedown", function(e) {
			$('.bg3,.pic15,.pic14,.next4').fadeOut()
			$('.bg4,.pic16,.title1,.next5').fadeIn();
		});

		$(".next5").bind("mousedown", function(e) {
			$('.pic16,.bg4,.title1,.next5').fadeOut();
			$('.bg5,.pic17,.next6').fadeIn();
		});

		$(".next6").bind("mousedown", function(e) {
			$('.next6').fadeOut()
			$('.pic19,.next7,.ref1').fadeIn();
			$('.pic17').animate({'right':'-1024px'},2000,function(){
				$('.pic18').animate({'left':'196px'},1300,function(){
				});
			});
			$('.next1,.next2,.next3,.next4,.next5,.next6').fadeOut()
		});

		$(".next7").bind("mousedown", function(e) {
			$('.next7').hide()
			$('.ref1').fadeIn();
			$('.pic18').animate({'left':'1024px'},2000,function(){
				$('.pic20').animate({'left':'29px'},1300,function(){
				});
			});
			$('.next7').fadeOut()
		});

	}
	this.startDisplay = function() {
		setTimeout(function() {
			$(".pic1").fadeIn(function() {
				$(".next").fadeIn(function() {
				});
			});
		}, 500);
	}

	this.finish = function() {
		$('#page2').html('');
	}
}

var page2Manager = new Page2();
$(document).ready(function() {
	page2Manager.init();
	$(".scrollable").niceScroll({
	});
});

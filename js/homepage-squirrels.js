
			function showBanner(){
				// console.log('showBanner');
				var bannerContainer = document.getElementById("cover_banner_container");
				bannerContainer.style.display="inline";
			}

			function hideBanner(){
				// console.log('hideBanner');
				var bannerContainer = document.getElementById("cover_banner_container");
				bannerContainer.style.display="none";
				$('#flash_banner').hide();
				$('#flash_banner_static').show();
				$('#slideshow-controls').show();
				$('div#primary-promo').css("padding", "0");
  		  $('div#primary-promo').css("border", "1px solid #d3e2e7");
        $('div#primary-promo').css("background", "#ffffff");
        $('div#primary-promo').css("box-shadow", "#cacaca 0px 1px 1px");
				$('#slideshow').cycle("next");
				$('#slideshow').cycle('resume');
				$('#cover-nta-banner-container').hide();
			}

			function StopSlideshow(){
			  // console.log('StopSlideshow');
			  $('#slideshow').cycle("pause");
			  $('div#primary-promo').css("border", "none");
			  $('div#primary-promo').css("padding", "1px");
			  $('div#primary-promo').css("background", "none");
			  $('#slideshow-controls').hide();

			}


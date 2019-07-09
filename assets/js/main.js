jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    var menuArea = $("#mainmenu-area");
    if (menuArea.length > 0) {
        menuArea.sticky({
            topSpacing: 0
        });
    }

    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });

	/*---------------------------
        vision-area 
    -----------------------------*/
    $('.sertificate').owlCarousel({
	    items: 1,
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
        nav:true,
	    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
                  '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    });
    
    
    /*---------------------------
        vision-area 
    -----------------------------*/
    $('.main-block-vision').owlCarousel({
	    items: 4,
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
        dots:false,
        nav:true,
	    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
                  '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    });
    
    //  ACTIVE CLASS TOGGLING IN MENU LIST
   
    const menuList = document.querySelectorAll(".dot");
    // const menuListAsArray = Array.prototype.slice.call(menuList);

    [...menuList].forEach(
    menuListItem => {
        menuListItem.addEventListener('click', ev => {
            
            const activeItem = document.querySelector(".dot.active");
            if (activeItem) {
                activeItem.classList.toggle('active');
            }
            menuListItem.classList.toggle("active");
            });
        }
    );
    /*----------------------------
        MOBILE & DROPDOWN MENU
    ------------------------------*/
    if ($("ul#nav").length > 0) {
        jQuery('.stellarnav').stellarNav({
            theme: 'dark'
        });
    }


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).on('scroll', function () {
        var totalHeight = $(window).scrollTop();
        var scrollToTop = $(".scrolltotop");
        if (totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if (totalHeight + $(window).height() === $(document).height()) {
            scrollToTop.css("bottom", "110px");
        } else {
            scrollToTop.css("bottom", "120px");
        }
    });

    /*--------------------------
       PARALLAX BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

    /*--------------------------
       POPUP VIDEO
    ----------------------------*/
		
	$(".video-link").magnificPopup({
	  type: "inline",
	  callbacks: {
		open: function() {
		  this.content.children("video")[0].play();
		},
		close: function() {
		  this.content.children("video")[0].pause();
		}
	  }
	});

    /*---------------------------
        CLIENT SLIDER
    -----------------------------*/
    var clientCarousel = $('.client-slider');
    if (clientCarousel.length > 0) {
        clientCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            center: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }

    /*---------------------------
        TESTMONIAL SLIDER
    -----------------------------*/
    var rightImageCarousel = $(".right-image");

    rightImageCarousel.owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout: 3000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    })
    
    var testmonialCarousel = $('.testmonial-slider');
    if (testmonialCarousel.length > 0) {
        testmonialCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 50,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2.5
                },
                1200: {
                    items: 3.5
                }
            }
        });
    }

    /*---------------------------
        PRICE SLIDER
    -----------------------------*/
    var priceCarousel = $('.price-list');
    if (priceCarousel.length > 0) {
        priceCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: false,
            autoplayTimeout: 3000,
            margin: -30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }
     /*---------------------------
        BLOG SLIDER
    -----------------------------*/

    var priceCarousel = $('.post-images');
    if (priceCarousel.length > 0) {
        priceCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: true,
            center: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: false,
            autoplayTimeout: 3000,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    /*---------------------------
        BLOG SLIDER
    -----------------------------*/
    var blogCarousel = $('.blog-slider');
    if (blogCarousel.length > 0) {
        blogCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            center: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    /*---------------------------
        ABOUTUS SLIDER
    -----------------------------*/
    var blogCarousel = $('.slider-mobile');
    if (blogCarousel.length > 0) {
        blogCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            center: false,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 20,
            stagePadding:60,
            responsiveClass: true,
            items:1
        });
    }
    /*---------------------------
        TEAM SLIDER
    -----------------------------*/
    var blogCarousel = $('.team-slider');
    if (blogCarousel.length > 0) {
        blogCarousel.owlCarousel({
            merge: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            center: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: false,
            autoplayTimeout: 3000,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    }

    /*-----------------------------------
        TESTMONIAL SLIDER ACTIVE
    -----------------------------------*/
    var testmonialBxSlider = $('.testimonials-slider .slider');
    if (testmonialBxSlider.length > 0) {
        testmonialBxSlider.bxSlider({
            // adaptiveHeight: true,
            auto: false,
            controls: true,
            nextText: '<i class="fa fa-long-arrow-right"></i>',
            prevText: '<i class="fa fa-long-arrow-left"></i>',
            mode: 'fade',
            pause: 3000,
            speed: 500,
            pager: true,
            pagerCustom: '#testimonials-slider-pager'
        });
    }

    /*--------------------------
        jQuery For Contact Form
    ----------------------------*/
	
	$('textarea').blur(function () {
		$('#hire textarea').each(function () {
			$this = $(this);
			if ( this.value != '' ) {
			  $this.addClass('focused');
			  $('textarea + label + span').css({'opacity': 1});
			}
			else {
			  $this.removeClass('focused');
			  $('textarea + label + span').css({'opacity': 0});
			}
		});
	});

	$('#hire .field:first-child input').blur(function () {
		$('#hire .field:first-child input').each(function () {
			$this = $(this);
			if ( this.value != '' ) {
			  $this.addClass('focused');
			  $('.field:first-child input + label + span').css({'opacity': 1});
			}
			else {
			  $this.removeClass('focused');
			  $('.field:first-child input + label + span').css({'opacity': 0});
			}
		});
	});

	$('#hire .field:nth-child(2) input').blur(function () {
		$('#hire .field:nth-child(2) input').each(function () {
			$this = $(this);
			if ( this.value != '' ) {
			  $this.addClass('focused');
			  $('.field:nth-child(2) input + label + span').css({'opacity': 1});
			}
			else {
			  $this.removeClass('focused');
			  $('.field:nth-child(2) input + label + span').css({'opacity': 0});
			}
		});
    });
    
    
    

    
    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();

    /*---------------------------
        PLACEHOLDER ANIMATION
    ----------------------------*/
    Placeholdem(document.querySelectorAll('[placeholder]'));

}(jQuery));


jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);

});


(function (e) {
    "use strict";
    window.onpageshow = function (e) {
        e.persisted && window.location.reload()
    };
    e(window).on("load", function () {
        // var t, s, n = e(".preloader");
        // setTimeout(function () {
        //     n.find(".spinner").velocity({
        //         opacity: "0",
        //         translateY: "-40px"
        //     }, {
        //         duration: 400,
        //         complete: function () {
        //             n.find(".box-1").velocity({
        //                 translateY: "-100%"
        //             }, {
        //                 duration: 1e3,
        //                 easing: [.7, 0, .3, 1]
        //             }), n.find(".box-2").velocity({
        //                 translateY: "-100%"
        //             }, {
        //                 duration: 400,
        //                 easing: [.7, 0, .3, 1]
        //             })
        //         }
        //     })
        // }, 1e3), 
        e(".typed-subtitle").length && e(".h-subtitle p").length > 1 && e(".typed-subtitle").each(function () {
            e(this).typed({
                stringsElement: e(this).prev(".typing-subtitle"),
                loop: !0
            })
        }), t = location.hash, s = e(t), t.indexOf("#section-") == 0 && s.length && e("body, html").animate({
            scrollTop: e(t).offset().top - 115
        }, 400)
    });
    var t, n, s, i, c, r = e(window).width(),
        o = e(window).height();
    r < 783 && e(".section.started").css({
        height: o
    }), e(".started-carousel").length && (t = new Swiper(".started-carousel .swiper-container", {
        init: !1,
        loop: !1,
        spaceBetween: 0,
        effect: "fade",
        slidesPerView: 1,
        simulateTouch: !1,
        autoplay: {
            delay: 6e3,
            disableOnInteraction: !1,
            waitForTransition: !1
        }
    }), t.on("slideChange", function () {
        var n = t.realIndex,
            s = t.slides.length;
        e(".started-carousel .swiper-slide").removeClass("first"), e(".started-carousel .swiper-slide").each(function (t, s) {
            n - 1 >= t ? e(s).addClass("swiper-clip-active") : e(s).removeClass("swiper-clip-active")
        }), e(".started-carousel .swiper-slide").each(function (t, n) {
            e(n).css({
                "z-index": s - t
            })
        })
    }), t.init()), e(".content-carousel").length && (i = e(".owl-carousel"), i.each(function () {
        var t = e(this),
            n = t.data("slidesview"),
            s = t.data("slidesview_mobile");
        t.owlCarousel({
            margin: 40,
            items: n,
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            loop: !1,
            rewind: !0,
            nav: !1,
            dots: !1,
            responsive: {
                0: {
                    margin: 40,
                    items: s
                },
                720: {
                    margin: 40,
                    items: n
                },
                1200: {
                    margin: 40,
                    items: n
                }
            }
        }), t.closest(".content-carousel").find(".next").click(function () {
            e(this).closest(".content-carousel").find(".owl-carousel").trigger("next.owl.carousel", [800])
        }), t.closest(".content-carousel").find(".prev").click(function () {
            e(this).closest(".content-carousel").find(".owl-carousel").trigger("prev.owl.carousel", [800])
        })
    })), e(".animated-button span").each(function () {
        var s = e(this).text().split(""),
            n = e(this);
        n.empty(), e.each(s, function (e, t) {
            n.append("<em>" + t + "</em>")
        })
    }), 
    // e("header .top-menu").on("click", "a", function () {
    //     var n, t = e(this).attr("href").replace("/#section-", "#section-");
    //     return t.indexOf("#section-") == 0 ? (e("body").hasClass("home") || (location.href = "/" + t), e("body, html").animate({
    //         scrollTop: e(t).offset().top - 115
    //     }, 400), e("header").hasClass("active") && e(".menu-btn").trigger("click")) : (n = e(".preloader"), n.find(".box-1").velocity({
    //         translateY: "0%"
    //     }, {
    //         duration: 400,
    //         easing: [.7, 0, .3, 1]
    //     }), n.find(".box-2").velocity({
    //         translateY: "0%"
    //     }, {
    //         duration: 1e3,
    //         easing: [.7, 0, .3, 1],
    //         complete: function () {
    //             location.href = t
    //         }
    //     })), !1
    // }), 
    e(window).on("scroll", function () {
        e(this).scrollTop() >= 100 && e(".section").length > 1 && (e(".header").addClass("fixed"), e(".mouse-btn").fadeOut()), e(this).scrollTop() <= 100 && e(".section").length > 1 && (e(".header").removeClass("fixed"), e(".mouse-btn").fadeIn())
    }), 
    e("header").on("click", ".menu-btn", function () {
        return e("header").hasClass("active") ? (e("header").removeClass("active"), e(".footer .soc").fadeIn(), e("body").addClass("loaded"), e(".video-bg").length && e("body").addClass("background-enabled")) : (e("header").addClass("active"), e(".footer .soc").hide(), e("body").removeClass("loaded"), e("body").removeClass("background-enabled")), !1
    }), 
    // e(".section").on("click", ".mouse-btn", function () {
    //     e("body, html").animate({
    //         scrollTop: o - 150
    //     }, 800)
    // }), 
    e(".section").length > 1 && e(".mouse-btn").show(), n = e(".section.works .box-items"), n.imagesLoaded(function () {
        n.isotope({
            itemSelector: ".box-col"
        })
    }), e(".filters").on("click", ".btn-group", function () {
        var t = e(this).find("input").val();
        n.isotope({
            filter: t
        }), e(".filters .btn-group label").removeClass("glitch-effect"), e(this).find("label").addClass("glitch-effect")
    }), /\.(?:jpg|jpeg|gif|png)$/i.test(e(".gallery-item:first a").attr("href")) && e(".gallery-item a").magnificPopup({
        gallery: {
            enabled: !0
        },
        type: "image",
        closeBtnInside: !1,
        mainClass: "mfp-fade"
    }), e(".has-popup-media").magnificPopup({
        type: "inline",
        overflowY: "auto",
        closeBtnInside: !0,
        mainClass: "mfp-fade"
    }), e(".has-popup-image").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-fade",
        image: {
            verticalFit: !0
        }
    }), e(".has-popup-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        iframe: {
            patterns: {
                youtube_short: {
                    index: "youtu.be/",
                    id: "youtu.be/",
                    src: "https://www.youtube.com/embed/%id%?autoplay=1"
                }
            }
        },
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "mfp-fade",
        callbacks: {
            markupParse: function (e) {
                e.find("iframe").attr("allow", "autoplay")
            }
        }
    }), e(".has-popup-music").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        mainClass: "mfp-fade"
    }), e(".has-popup-gallery").on("click", function () {
        var t = e(this).attr("href");
        return e(t).magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: !1,
            mainClass: "mfp-fade",
            removalDelay: 160,
            fixedContentPos: !1,
            gallery: {
                enabled: !0
            }
        }).magnificPopup("open"), !1
    }), e(".jarallax-video").length && e(".jarallax-video").each(function () {
        e(this).jarallax()
    });

    function a() {
        var t = e(".skills.dotted .progress"),
            n = t.width();
        t.length && (t.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'), t.find(".percentage").append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'), t.find(".percentage .da").css({
            width: n
        }))
    }
    setTimeout(a, 1e3), s = e(".skills.circles .progress"), s.length && s.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>'), e(window).resize(function () {
        var t, n, s = e(window).width(),
            o = e(window).height();
        s < 783 && e(".section.started").css({
            height: o
        }), t = e(".skills-list.dotted .progress"), n = t.width(), t.length && t.find(".percentage .da").css({
            width: n + 1
        })
    }), e("header").on("click", ".sidebar_btn", function () {
        return e(".s_overlay").fadeIn(), e(".content-sidebar").addClass("active"), e("body").addClass("scroll_hidden"), !1
    }), e(".content-sidebar, .container").on("click", ".close, .s_overlay", function () {
        e(".s_overlay").fadeOut(), e(".content-sidebar").removeClass("active"), e("body").removeClass("scroll_hidden")
    }), e(".widget-title").wrapInner('<span class="widget-title-span"></span>'), e("#search-input").length && (c = SimpleJekyllSearch({
        searchInput: document.getElementById("search-input"),
        resultsContainer: document.getElementById("results-container"),
        json: "/search.json"
    }))

    /* Locomotive scroll (ls) :: Start */
    var optionsLs = {
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1.25,
        getDirection: true,
        getSpeed: true,
        reloadOnContextChange: true
        // resetNativeScroll: false
    };

    if ($('[data-scroll-container]').length) {

        // Init
        const ls = new LocomotiveScroll(optionsLs);

        // functions
        window.lsScrollTo = function (toPosition, offset = 0) {
            ls.scrollTo(toPosition, {
                offset: offset
            });
        }

        // Update to recalculate the scroll
        window.lsUpdate = function () {
            setTimeout(function () {
                ls.update();
            }, 300);
        }

        // Events
        // on Scroll event replaces $(document).scroll event
        ls.on('scroll', function (args) {
            onScroll(args);
        });

        // Update on init
        lsUpdate();
    }
    /* Locomotive scroll :: End */

    // Fallback for events of no custom scroll
    if (typeof ls === 'undefined') {
        // Fallback for scroll event
        $(document).on('scroll', function (e) {
            onScroll(e);
        });
    }

    // Pre loader animation start
    if ( $('.preloader').length ) {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to(".lightCyan-slider", {
            x: "-10%",
            duration: 1,
        });

        tl.to(
        ".persianGreen-slider",
        {
            x: "-20%",
            duration: 1.5,
        },
        "-=1"
        );

        tl.to(
        ".white-slider",
        {
            x: "-30%",
            duration: 1.5,
        },
        "-=1"
        );

        tl.to(".hide", {
            x: "0%",
            duration: 2,
            opacity: 1,
        });

        tl.to(".preloader", {
            x: "200%",
            duration: 3,
        });

        tl.fromTo(".container", {
            opacity: 0,
            // y: -20,
        },
        {
            opacity: 1,
            duration: 1,
            // y: 0,
        },
        "-=1.5"
        );
    }
    // Pre loader animation end

    
    /* Init ScrollMagic controller for Reveal on scroll] */
    var revealDuration = 0.5;
    var revealStartTime = 0.3;

    // Section title and content animation start 
    var controller = new ScrollMagic.Controller();
    $(".section").each(function () {
        // var $this = $(this);
        // console.log($this);
        const timeline = gsap.timeline({ paused: true });
        // var timeline = new TimelineMax();

        var title = $(this).find('.title');
        var subTitle = $(this).find('.subtitle');
        var content = $(this).find('*:not(.title):not(.info)');
        // var img = $(this).find('.reveal-image');

        timeline
            // Start values for the section title
            // .set(title, {
            //     y: '100%',
            //     opacity: 0,
            // })

            // Stagger the animation of the  section title
            // .to(title, 1, {
            //     // ease: 'Power3.easeOut',
            //     y: '0%',
            //     opacity: 1
            // }, 0.5)

            // Stagger the animation of paragraphs and button
            .fromTo(title, revealDuration, { xPercent: 0, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1 }, revealStartTime)
            .fromTo(subTitle, revealDuration, { autoAlpha: 0 }, { autoAlpha: 1 }, revealStartTime)
            // .staggerFromTo(paragraph, revealDuration, { autoAlpha: 0 }, { autoAlpha: 1 }, revealStartTime)
            .fromTo(content, revealDuration, { autoAlpha: 0 }, { autoAlpha: 1 }, revealStartTime)

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false,
            offset: 0,
            triggerHook: 0.5,
        })
        .setTween(timeline.play())
        // .addIndicators({
        // 	colorTrigger: "red",
        // 	colorStart: "blue",
        // 	colorEnd: "green"
        // })
        .addTo(controller);

    });
    // Section title and contennt animation end
    if (window.matchMedia("(min-width: 992px)").matches) {
        window.onscroll = function(e) {
            // console.clear();
        
            if(this.oldScroll > this.scrollY){
            //   console.log('Scrolling up');
            $('header').css('position','fixed');
            }
            else{
            //   console.log('Scrolling down');
            $('header').css('position','absolute');
            }
            
            this.oldScroll = this.scrollY;
        }
    }

    $('.back-to-top').click(function (e) {
        e.preventDefault();

        if ($('[data-scroll-container]').length) {
            lsScrollTo("top");
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
    });

    function onScroll(e) {
        // checking condition for custom scroll or default scroll
        var scrollPos = typeof e.scroll !== 'undefined' ? e.scroll.y : $(window).scrollTop();
        // console.log(scrollPos);
        if (scrollPos > 10) {
            $(".site-header").removeClass("transparent-header");
            $(".back-to-top").addClass("active");
        } else {
            $(".site-header").addClass("transparent-header");
            $(".back-to-top").removeClass("active");
        }

        if ( $(".section").length && $(".top-menu li a").length )  {
            // var t = e(window).scrollTop();
            $(".top-menu ul li a").each(function () {
                if ($(this).attr("href").indexOf("#section-") == 0) {
                    var n = $(this),
                        s = $(n.attr("href"));
                    s.length && s.offset().top <= scrollPos + 120 && ($(".top-menu ul li").removeClass("current-menu-item"), n.closest("li").addClass("current-menu-item"))
                }
            })
        }; 

        if (window.matchMedia("(max-width: 991px)").matches) {
            if (scrollPos > 10) {
                $('header').css('position','fixed');
            }
        }
        
    }

    $("header .top-menu").on("click", "a", function () {
        $('header').removeClass('active');
    });

})(jQuery)


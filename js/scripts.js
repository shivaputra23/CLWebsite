/*================
 Template Name: AppCo App Landing Page Template
 Description: AppCo is app and product landing page template.
 Version: 1.0
 Author: https://themeforest.net/user/themetags
=======================*/

// TABLE OF CONTENTS
// 1. fixed navbar
// 2. page scrolling feature - requires jQuery Easing plugin
// 3. closes the responsive menu on menu item click
// 4. magnify popup video
// 5. client testimonial slider
// 6. Screenshots slider
// 7. custom counter js with scrolling
// 8. client-testimonial one item carousel
// 9. our clients logo carousel
// 10. our clients logo carousel
// 11. wow js

jQuery(function ($) {
  "use strict";
  // 1. fixed navbar
  $(window).on("scroll", function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 60) {
      $(".navbar").addClass("affix");
    } else {
      $(".navbar").removeClass("affix");
    }
  });

  // 2. page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(document).on("click", "a.page-scroll", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 60,
          },
          900,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });

  // 3. closes the responsive menu on menu item click
  $(".navbar-nav li a").on("click", function (event) {
    if (!$(this).parent().hasClass("dropdown"))
      $(".navbar-collapse").collapse("hide");
  });

  // 4. magnify popup video
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // 5. client testimonial slider
  $(".client-testimonial").owlCarousel({
    loop: false,
    margin: 30,
    items: 1,
    nav: true,
    dots: false,
    responsiveClass: true,
    autoplay: false,
    autoplayHoverPause: true,
    lazyLoad: true,
  });

  // 6. Screenshots slider
  $(".screen-carousel").owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      991: {
        items: 4,
      },
      1200: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });

  // 7. custom counter js with scrolling
  var isFirstTime = true;
  var interval = null;
  var countSelector = $(".single-counter > span, .single-card > h3");
  if (countSelector.length) {
    var startingTop = countSelector.offset().top - window.innerHeight;
    if (startingTop > 0) {
      $(window).on("scroll", function () {
        if (isFirstTime && $(window).scrollTop() > startingTop) {
          startCounting();
          isFirstTime = false;
        }
      });
    } else {
      startCounting();
    }
  }

  /**
   * Get the increment value
   * @param value
   * @returns {number}
   */
  function incrementValue(value) {
    var incVal = 0;
    if (Math.ceil(value / 2) <= 5) {
      // upto 10
      incVal = 1;
    } else if (Math.ceil(value / 10) <= 10) {
      // up to 100
      incVal = 10;
    } else if (Math.ceil(value / 100) <= 10) {
      // up to 1000
      incVal = 25;
    } else if (Math.ceil(value / 100) <= 100) {
      // up to 10000
      incVal = 50;
    } else if (Math.ceil(value / 1000) <= 100) {
      // up to 100000
      incVal = 150;
    } else {
      incVal = 500;
    }
    return incVal;
  }

  /**
   * To start count
   * @param counters all selectors
   * @param start int
   * @param value int
   * @param id int
   */
  function count(counters, start, value, id) {
    var localStart = start;
    var inc = incrementValue(value);
    interval = setInterval(function () {
      if (localStart < value) {
        localStart = localStart + inc;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  /**
   * Start the count
   */
  function startCounting() {
    var counters = $(".single-counter > span, .single-card > h3");
    var countersQuantity = counters.length;
    var counter = [];

    // get al counts from HTML count
    for (var i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }

    // calling all count function
    for (var j = 0; j < countersQuantity; j++) {
      count(counters, 0, counter[j], j);
    }
  }

  // 8. client-testimonial one item carousel
  $(".client-testimonial-1").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsiveClass: true,
    autoplay: false,
    autoplayHoverPause: true,
    lazyLoad: true,
    items: 1,
  });

  // 9. our clients logo carousel
  $(".clients-carousel").owlCarousel({
    autoplay: false,
    loop: true,
    margin: 15,
    dots: true,
    slideTransition: "linear",
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 3,
      },
      600: {
        items: 4,
      },
      800: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // 11. wow js
  function wowAnimation() {
    new WOW({
      offset: 100,
      mobile: true,
    }).init();
  }
  wowAnimation();

  //countdown one

  $("#clock").countdown("2022/01/30", function (event) {
    $(this).html(
      event.strftime(
        "" +
          '<div class="row">' +
          '<div class="col">' +
          '<h2 class="mb-1">%-D</h2>' +
          "<h5>Day%!d</h5>" +
          "</div>" +
          '<div class="col">' +
          '<h2 class="mb-1">%H</h2>' +
          "<h5>Hours</h5>" +
          "</div>" +
          '<div class="col">' +
          '<h2 class="mb-1">%M</h2>' +
          "<h5>Minutes</h5>" +
          "</div>" +
          '<div class="col">' +
          '<h2 class="mb-1">%S</h2>' +
          "<h5>Seconds</h5>" +
          "</div>" +
          "</div>"
      )
    );
  });

  // Subscription
  if ($("#getQuoteFrm").length) {
    $("#getQuoteFrm")
      .validator()
      .on("submit", function (event) {
        if (event.isDefaultPrevented()) {
          // handle the invalid form...
          submitMSG(false);
        } else {
          // everything looks good!
          event.preventDefault();
          submitGetQuoteForm();
        }
      });
  }

  function submitGetQuoteForm() {
    // Initiate Variables With Form Content
    var name = $('#getQuoteFrm input[name="name"]').val();
    var email = $('#getQuoteFrm input[name="email"]').val();
    var subject = $('#getQuoteFrm input[name="subject"]').val();
    var message = $('#getQuoteFrm textarea[name="message"]').val();

    if (!$("#getQuoteFrm #exampleCheck1").is(":checked")) {
      submitMSG(false, ".sign-up-form-wrap");
      return;
    }

    $.ajax({
      type: "POST",
      url: "libs/quote-form-process.php",
      data:
        "name=" +
        name +
        "&email=" +
        email +
        "&subject=" +
        subject +
        "&message=" +
        message,
      success: function (text) {
        if (text == "success") {
          quoteFormSuccess();
        } else {
          submitMSG(false, ".sign-up-form-wrap");
        }
      },
    });
  }

  function quoteFormSuccess() {
    $("#getQuoteFrm")[0].reset();
    submitMSG(true, ".sign-up-form-wrap");
  }

  // contact form
  if ($("#contactForm").length) {
    $("#contactForm")
      .validator()
      .on("submit", function (event) {
        if (event.isDefaultPrevented()) {
          // handle the invalid form...
          submitMSG(false, ".contact-us");
        } else {
          // everything looks good!
          event.preventDefault();
          submitContactForm();
        }
      });
  }

  function submitContactForm() {
    // Initiate Variables With Form Content
    var name = $("#contactForm #name").val();
    var email = $("#contactForm #email").val();
    var phone = $("#contactForm #phone").val();
    var company = $("#contactForm #company").val();
    var message = $("#contactForm #message").val();

    $.ajax({
      type: "POST",
      url: "libs/contact-form-process.php",
      data:
        "name=" +
        name +
        "&email=" +
        email +
        "&phone=" +
        phone +
        "&company=" +
        company +
        "&message=" +
        message,
      success: function (text) {
        if (text == "success") {
          formSuccess();
        } else {
          submitMSG(false, ".contact-us");
        }
      },
    });
  }

  function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, ".contact-us");
  }

  function submitMSG(valid, parentSelector) {
    if (valid) {
      $(parentSelector + " .message-box")
        .removeClass("d-none")
        .addClass("d-block ");
      $(parentSelector + " .message-box div")
        .removeClass("alert-danger")
        .addClass("alert-success")
        .text("Form submitted successfully");
    } else {
      $(parentSelector + " .message-box")
        .removeClass("d-none")
        .addClass("d-block ");
      $(parentSelector + " .message-box div")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .text("Found error in the form. Please check again.");
    }
  }
}); // JQuery end

$(function () {
  "use strict";

  //Loader
  $(function preloaderLoad() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(300);
    }
    $(".preloader_disabler").on("click", function () {
      $("#preloader").hide();
    });
  });

  // Count
  $(window).on("load", function () {
    $(".bc_sec_last li h4").counterUp({
      delay: 100,
      time: 800,
    });
  });

  // Count
  $(window).on("load", function () {
    $(".counts").counterUp({
      delay: 100,
      time: 800,
    });
  });

  // Script Navigation
  !(function (n, e, i, a) {
    (n.navigation = function (t, s) {
      var o = {
          responsive: !0,
          mobileBreakpoint: 992,
          showDuration: 300,
          hideDuration: 300,
          showDelayDuration: 0,
          hideDelayDuration: 0,
          submenuTrigger: "hover",
          effect: "fade",
          submenuIndicator: !0,
          hideSubWhenGoOut: !0,
          visibleSubmenusOnMobile: !1,
          fixed: !1,
          overlay: !0,
          overlayColor: "rgba(0, 0, 0, 0.5)",
          hidden: !1,
          offCanvasSide: "left",
          onInit: function () {},
          onShowOffCanvas: function () {},
          onHideOffCanvas: function () {},
        },
        u = this,
        r = Number.MAX_VALUE,
        d = 1,
        f = "click.nav touchstart.nav",
        l = "mouseenter.nav",
        c = "mouseleave.nav";
      u.settings = {};
      var t = (n(t), t);
      n(t)
        .find(".nav-menus-wrapper")
        .prepend("<span class='nav-menus-wrapper-close-button'>✕</span>"),
        n(t).find(".nav-search").length > 0 &&
          n(t)
            .find(".nav-search")
            .find("form")
            .prepend("<span class='nav-search-close-button'>✕</span>"),
        (u.init = function () {
          (u.settings = n.extend({}, o, s)),
            "right" == u.settings.offCanvasSide &&
              n(t)
                .find(".nav-menus-wrapper")
                .addClass("nav-menus-wrapper-right"),
            u.settings.hidden &&
              (n(t).addClass("navigation-hidden"),
              (u.settings.mobileBreakpoint = 99999)),
            v(),
            u.settings.fixed && n(t).addClass("navigation-fixed"),
            n(t)
              .find(".nav-toggle")
              .on("click touchstart", function (n) {
                n.stopPropagation(),
                  n.preventDefault(),
                  u.showOffcanvas(),
                  s !== a && u.callback("onShowOffCanvas");
              }),
            n(t)
              .find(".nav-menus-wrapper-close-button")
              .on("click touchstart", function () {
                u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas");
              }),
            n(t)
              .find(".nav-search-button")
              .on("click touchstart", function (n) {
                n.stopPropagation(), n.preventDefault(), u.toggleSearch();
              }),
            n(t)
              .find(".nav-search-close-button")
              .on("click touchstart", function () {
                u.toggleSearch();
              }),
            n(t).find(".megamenu-tabs").length > 0 && y(),
            n(e).resize(function () {
              m(), C();
            }),
            m(),
            s !== a && u.callback("onInit");
        });
      var v = function () {
        n(t)
          .find("li")
          .each(function () {
            n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
              (n(this)
                .children(".nav-dropdown,.megamenu-panel")
                .addClass("nav-submenu"),
              u.settings.submenuIndicator &&
                n(this)
                  .children("a")
                  .append(
                    "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                  ));
          });
      };
      (u.showSubmenu = function (e, i) {
        g() > u.settings.mobileBreakpoint &&
          n(t).find(".nav-search").find("form").slideUp(),
          "fade" == i
            ? n(e)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(u.settings.showDelayDuration)
                .fadeIn(u.settings.showDuration)
            : n(e)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(u.settings.showDelayDuration)
                .slideDown(u.settings.showDuration),
          n(e).addClass("nav-submenu-open");
      }),
        (u.hideSubmenu = function (e, i) {
          "fade" == i
            ? n(e)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(u.settings.hideDelayDuration)
                .fadeOut(u.settings.hideDuration)
            : n(e)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(u.settings.hideDelayDuration)
                .slideUp(u.settings.hideDuration),
            n(e)
              .removeClass("nav-submenu-open")
              .find(".nav-submenu-open")
              .removeClass("nav-submenu-open");
        });
      var h = function () {
          n("body").addClass("no-scroll"),
            u.settings.overlay &&
              (n(t).append("<div class='nav-overlay-panel'></div>"),
              n(t)
                .find(".nav-overlay-panel")
                .css("background-color", u.settings.overlayColor)
                .fadeIn(300)
                .on("click touchstart", function (n) {
                  u.hideOffcanvas();
                }));
        },
        p = function () {
          n("body").removeClass("no-scroll"),
            u.settings.overlay &&
              n(t)
                .find(".nav-overlay-panel")
                .fadeOut(400, function () {
                  n(this).remove();
                });
        };
      (u.showOffcanvas = function () {
        h(),
          "left" == u.settings.offCanvasSide
            ? n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "left")
                .addClass("nav-menus-wrapper-open")
            : n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "right")
                .addClass("nav-menus-wrapper-open");
      }),
        (u.hideOffcanvas = function () {
          n(t)
            .find(".nav-menus-wrapper")
            .removeClass("nav-menus-wrapper-open")
            .on(
              "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
              function () {
                n(t)
                  .find(".nav-menus-wrapper")
                  .css("transition-property", "none")
                  .off();
              }
            ),
            p();
        }),
        (u.toggleOffcanvas = function () {
          g() <= u.settings.mobileBreakpoint &&
            (n(t).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open")
              ? (u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas"))
              : (u.showOffcanvas(), s !== a && u.callback("onShowOffCanvas")));
        }),
        (u.toggleSearch = function () {
          "none" == n(t).find(".nav-search").find("form").css("display")
            ? (n(t).find(".nav-search").find("form").slideDown(),
              n(t).find(".nav-submenu").fadeOut(200))
            : n(t).find(".nav-search").find("form").slideUp();
        });
      var m = function () {
          u.settings.responsive
            ? (g() <= u.settings.mobileBreakpoint &&
                r > u.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-portrait")
                  .removeClass("navigation-landscape"),
                D()),
              g() > u.settings.mobileBreakpoint &&
                d <= u.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-landscape")
                  .removeClass("navigation-portrait"),
                k(),
                p(),
                u.hideOffcanvas()),
              (r = g()),
              (d = g()))
            : k();
        },
        b = function () {
          n("body").on("click.body touchstart.body", function (e) {
            0 === n(e.target).closest(".navigation").length &&
              (n(t).find(".nav-submenu").fadeOut(),
              n(t).find(".nav-submenu-open").removeClass("nav-submenu-open"),
              n(t).find(".nav-search").find("form").slideUp());
          });
        },
        g = function () {
          return (
            e.innerWidth || i.documentElement.clientWidth || i.body.clientWidth
          );
        },
        w = function () {
          n(t).find(".nav-menu").find("li, a").off(f).off(l).off(c);
        },
        C = function () {
          if (g() > u.settings.mobileBreakpoint) {
            var e = n(t).outerWidth(!0);
            n(t)
              .find(".nav-menu")
              .children("li")
              .children(".nav-submenu")
              .each(function () {
                n(this).parent().position().left + n(this).outerWidth() > e
                  ? n(this).css("right", 0)
                  : n(this).css("right", "auto");
              });
          }
        },
        y = function () {
          function e(e) {
            var i = n(e).children(".megamenu-tabs-nav").children("li"),
              a = n(e).children(".megamenu-tabs-pane");
            n(i).on("click.tabs touchstart.tabs", function (e) {
              e.stopPropagation(),
                e.preventDefault(),
                n(i).removeClass("active"),
                n(this).addClass("active"),
                n(a).hide(0).removeClass("active"),
                n(a[n(this).index()]).show(0).addClass("active");
            });
          }
          if (n(t).find(".megamenu-tabs").length > 0)
            for (var i = n(t).find(".megamenu-tabs"), a = 0; a < i.length; a++)
              e(i[a]);
        },
        k = function () {
          w(),
            n(t).find(".nav-submenu").hide(0),
            navigator.userAgent.match(/Mobi/i) ||
            navigator.maxTouchPoints > 0 ||
            "click" == u.settings.submenuTrigger
              ? n(t)
                  .find(".nav-menu, .nav-dropdown")
                  .children("li")
                  .children("a")
                  .on(f, function (i) {
                    if (
                      (u.hideSubmenu(
                        n(this).parent("li").siblings("li"),
                        u.settings.effect
                      ),
                      n(this)
                        .closest(".nav-menu")
                        .siblings(".nav-menu")
                        .find(".nav-submenu")
                        .fadeOut(u.settings.hideDuration),
                      n(this).siblings(".nav-submenu").length > 0)
                    ) {
                      if (
                        (i.stopPropagation(),
                        i.preventDefault(),
                        "none" ==
                          n(this).siblings(".nav-submenu").css("display"))
                      )
                        return (
                          u.showSubmenu(
                            n(this).parent("li"),
                            u.settings.effect
                          ),
                          C(),
                          !1
                        );
                      if (
                        (u.hideSubmenu(n(this).parent("li"), u.settings.effect),
                        "_blank" == n(this).attr("target") ||
                          "blank" == n(this).attr("target"))
                      )
                        e.open(n(this).attr("href"));
                      else {
                        if (
                          "#" == n(this).attr("href") ||
                          "" == n(this).attr("href")
                        )
                          return !1;
                        e.location.href = n(this).attr("href");
                      }
                    }
                  })
              : n(t)
                  .find(".nav-menu")
                  .find("li")
                  .on(l, function () {
                    u.showSubmenu(this, u.settings.effect), C();
                  })
                  .on(c, function () {
                    u.hideSubmenu(this, u.settings.effect);
                  }),
            u.settings.hideSubWhenGoOut && b();
        },
        D = function () {
          w(),
            n(t).find(".nav-submenu").hide(0),
            u.settings.visibleSubmenusOnMobile
              ? n(t).find(".nav-submenu").show(0)
              : (n(t).find(".nav-submenu").hide(0),
                n(t)
                  .find(".submenu-indicator")
                  .removeClass("submenu-indicator-up"),
                u.settings.submenuIndicator
                  ? n(t)
                      .find(".submenu-indicator")
                      .on(f, function (e) {
                        return (
                          e.stopPropagation(),
                          e.preventDefault(),
                          u.hideSubmenu(
                            n(this).parent("a").parent("li").siblings("li"),
                            "slide"
                          ),
                          u.hideSubmenu(
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .children("li"),
                            "slide"
                          ),
                          "none" ==
                          n(this)
                            .parent("a")
                            .siblings(".nav-submenu")
                            .css("display")
                            ? (n(this).addClass("submenu-indicator-up"),
                              n(this)
                                .parent("a")
                                .parent("li")
                                .siblings("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              n(this)
                                .closest(".nav-menu")
                                .siblings(".nav-menu")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              u.showSubmenu(
                                n(this).parent("a").parent("li"),
                                "slide"
                              ),
                              !1)
                            : (n(this)
                                .parent("a")
                                .parent("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              void u.hideSubmenu(
                                n(this).parent("a").parent("li"),
                                "slide"
                              ))
                        );
                      })
                  : k());
        };
      (u.callback = function (n) {
        s[n] !== a && s[n].call(t);
      }),
        u.init();
    }),
      (n.fn.navigation = function (e) {
        return this.each(function () {
          if (a === n(this).data("navigation")) {
            var i = new n.navigation(this, e);
            n(this).data("navigation", i);
          }
        });
      });
  })(jQuery, window, document),
    $(document).ready(function () {
      $("#navigation").navigation();
    });

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Bottom To Top Scroll Script
  $(window).on("scroll", function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $("#back2Top").fadeIn();
    } else {
      $("#back2Top").fadeOut();
    }
  });

  $("#back2Top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Script For Fix Header on Scroll
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".header").addClass("header-fixed");
    } else {
      $(".header").removeClass("header-fixed");
    }
  });

  // Brand Slide
  // smart_textimonials_style
  $("#brand-slide").slick({
    slidesToShow: 5,
    arrows: false,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
  $("#brand-slide1").slick({
    slidesToShow: 5,
    arrows: false,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });

  $("#brand-slide2").slick({
    slidesToShow: 5,
    arrows: false,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });

  $("#brand-slide3").slick({
    slidesToShow: 5,
    arrows: false,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });

  // smart_textimonials_style
  $("#reviews-slide").slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // smart_textimonials_style
  $("#testimonials_style").slick({
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // smart_textimonials_style
  $("#four_slide").slick({
    slidesToShow: 4,
    arrows: true,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  // smart_textimonials_style
  $("#three_slide").slick({
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Slide For No Arrow Four
  $(".four_slide").slick({
    slidesToShow: 4,
    arrows: true,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Slide For No Arrow Three
  $(".three_slide").slick({
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Slide For dots Four
  $(".four_slide-dots").slick({
    slidesToShow: 4,
    arrows: true,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Slide For dots Three
  $(".three_slide-dots").slick({
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Slide For dots Three
  $("#reviews-login").slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Select Job category
  // $('#c-category').select2({
  // 	placeholder: "Choose Category",
  // 	allowClear: true
  // });

  // country
  // $('#country').select2({
  // 	placeholder: "Choose Country",
  // 	allowClear: true
  // });
});

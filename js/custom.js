$(document).ready((function(e){"use strict";e(window).ready((function(){e(".loader-box").fadeOut(),e("body").removeClass("fixed")})),(new WOW).init(),e(window).on("scroll",(function(){e(window).scrollTop()>=100?e(".site-header").addClass("sticky-header"):e(".site-header").removeClass("sticky-header"),e(window).scrollTop()+window.innerHeight<e(".main-services").offset().top+1900?e("#menu-1").hasClass("active")||(e(".menu>li.active").removeClass("active"),e("#menu-1").addClass("active")):e(window).scrollTop()+window.innerHeight<e(".main-counter").offset().top+1600?e("#menu-2").hasClass("active")||(e(".menu>li.active").removeClass("active"),e("#menu-2").addClass("active")):e(window).scrollTop()+window.innerHeight<e(".main-ia").offset().top+1500?e("#menu-5").hasClass("active")||(e(".menu>li.active").removeClass("active"),e("#menu-5").addClass("active")):e(window).scrollTop()+window.innerHeight<e(".main-product").offset().top+1600&&(e("#menu-6").hasClass("active")||(e(".menu>li.active").removeClass("active"),e("#menu-6").addClass("active")))})),e(".toggle-button").on("click",(function(){e(".main-navigation").toggleClass("toggle-menu"),e(".header-menu .black-shadow").fadeToggle()})),e(".main-navigation ul li a").on("click",(function(){e(".main-navigation").removeClass("toggle-menu"),e(".header-menu .black-shadow").fadeOut()})),e(".main-navigation ul li.sub-items>a").on("click",(function(){e(".main-navigation").addClass("toggle-menu"),e(".header-menu .black-shadow").stop()})),e(".header-menu .black-shadow").on("click",(function(){e(this).fadeOut(),e(".main-navigation").removeClass("toggle-menu")})),e("#scroll-to-top").on("click",(function(){return e("html, body").animate({scrollTop:0},800),!1})),e(window).on("scroll",(function(){e(window).scrollTop()>300?e("#scroll-to-top").fadeIn(500):e("#scroll-to-top").fadeOut(500)}))}));
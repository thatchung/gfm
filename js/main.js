function initScrollEvent(){gsap.registerPlugin(ScrollTrigger),gsap.to(".services-img1",{scrollTrigger:{trigger:".services-img1",toggleActions:"restart none none reset"},opacity:1,x:0,ease:"expo.out",duration:2}),gsap.to(".services-img2",{scrollTrigger:{trigger:".services-img2",toggleActions:"restart none none reset"},opacity:1,y:0,ease:"expo.out",duration:2}),gsap.to(".services-img3",{scrollTrigger:{trigger:".services-img3",toggleActions:"restart none none reset"},opacity:1,x:0,ease:"expo.out",duration:2.5}),gsap.to(".services-img4",{scrollTrigger:{trigger:".services-img4",toggleActions:"restart none none reset"},opacity:1,x:0,ease:"expo.out",duration:2}),gsap.to(".services-img5",{scrollTrigger:{trigger:".services-img5",toggleActions:"restart none none reset"},opacity:1,x:0,ease:"expo.out",duration:1.5}),gsap.to(".services-img6",{scrollTrigger:{trigger:".services-img6",toggleActions:"restart none none reset"},opacity:1,y:0,ease:"expo.out",duration:2}),gsap.to(".services-img7",{scrollTrigger:{trigger:".services-img7",toggleActions:"restart none none reset"},opacity:1,y:0,ease:"expo.out",duration:1}),gsap.to(".services-img88",{scrollTrigger:{trigger:".services-img88",toggleActions:"restart none none reset"},opacity:1,y:0,ease:"expo.out",duration:2.2}),gsap.to(".services-img9",{scrollTrigger:{trigger:".services-img9",toggleActions:"restart none none reset"},opacity:1,x:0,ease:"expo.out",duration:2.2}),gsap.to(".services-img10",{scrollTrigger:{trigger:".services-img10",toggleActions:"restart none none reset"},opacity:1,x:0,ease:"expo.out",duration:2.2}),gsap.to(".services-img11",{scrollTrigger:{trigger:".services-img11",toggleActions:"restart none none reset"},opacity:1,x:0,ease:"expo.out",duration:2.2}),gsap.to(".img-product",{scrollTrigger:{trigger:".img-product",toggleActions:"restart none none reset"},opacity:1,y:0,ease:"expo.out",duration:1.3})}function sendEmail(){Email.send({Host:"smtp.elasticemail.com",Username:"trieuqk@gmail.com",Password:"6EF379414655B83BF26804104E4F82D29B81",To:"thatchung1@gmail.com",From:"trieuqk@gmail.com",Subject:"Test SendEmail",Body:"And this is the body"}).then((e=>alert(e)))}function telephoneCheck(e){var t=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e);return t}function validateEmail(e){let t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return!!e.match(t)}$(document).ready((function(e){initScrollEvent(),e("#submit_btn").click((function(){let t=e("#name_form").val(),r=e("#sub_name_form").val(),i=e("#phone_form").val(),o=e("#email_form").val();t&&r?i?telephoneCheck(i)?o?validateEmail(o)?sendEmail():alert("Vui l\xf2ng nh\u1eadp \u0111\xfang \u0111\u1ecba ch\u1ec9 email"):alert("Vui l\xf2ng nh\u1eadp \u0111\u1ecba ch\u1ec9 email"):alert("Vui l\xf2ng nh\u1eadp \u0111\xfang \u0111\u1ecbnh d\u1ea1ng s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"):alert("Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"):alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 h\u1ecd t\xean")}))}));
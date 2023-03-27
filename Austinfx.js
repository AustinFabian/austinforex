$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 50) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scrollupbtn").addClass("show");
    } else {
      $(".scrollupbtn").removeClass("show");
    }
  });

  // slide up javascript

  $(".scrollupbtn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle navbar script

  $(".menubtn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menubtn i").toggleClass("active");
  });

  // owl carousel script

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  // typing animation script

  var typed = new Typed(".typing", {
    strings: ["pro", "Sniper"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

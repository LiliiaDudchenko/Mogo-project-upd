$(document).ready(function () {
  $("#accordeon .acc_head").on("click", f_acc);

  function f_acc() {
    $("#accordeon .acc_body").not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(500);

    $("#accordeon .acc_head").not(this).removeClass("active");
    $(this).toggleClass("active");
  }

  var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".mobile_menu").on("click", function () {
    $(".mobile_menu_btn").toggleClass("active");
    $(".menu ul").slideToggle(400);
  });

  //Scroll to anchor
  $("a.scroll_link").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500
    );
  });
});

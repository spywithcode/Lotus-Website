(function ($) {
  "use strict";

  new WOW().init();

  //navbar cart
  $(".cart_link > a").on("click", function () {
    $(".mini_cart").addClass("active");
  });

  $(".mini_cart_close > a").on("click", function () {
    $(".mini_cart").removeClass("active");
  });

  //sticky navbar
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });

  // background image
  function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      var bgImgUrl = $(this).data("bgimg");
      $(this).css({
        "background-image": "url(" + bgImgUrl + ")", // concatenation
      });
    });
  }

  $(window).on("load", function () {
    dataBackgroundImage();
  });

  //for carousel slider of the slider section
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
  });

  //product column responsive
  $(".product_column3").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    rows: 2,
    prevArrow:
      '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
    nextArrow:
      '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
    responsive: [
      {
        breakpoints: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoints: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoints: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoints: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  //for tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //tooltip active
  $(".action_links ul li a, .quick_button a").tooltip({
    animated: "fade",
    placement: "top",
    container: "body",
  });

  //product row activation responsive
  $(".product_row1").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    prevArrow:
      '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
    nextArrow:
      '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
    responsive: [
      {
        breakpoints: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoints: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoints: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoints: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  // blog section
  $(".blog_column3").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 5000,
    items: 3,
    dots: false,
    margin: 30,
    navText: [
      '<i class="ion-chevron-left"></i>',
      '<i class="ion-chevron-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  //navactive responsive
  $(".product_navactive").owlCarousel({
    autoplay: false,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="ion-chevron-left arrow-left"></i>',
      '<i class="ion-chevron-right arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      250: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
    },
  });

  $(".modal").on("shown.bs.modal", function (e) {
    $(".product_navactive").resize();
  });

  $(".product_navactive a").on("click", function (e) {
    e.preventDefault();
    var $href = $(this).attr("href");
    $(".product_navactive a").removeClass("active");
    $(this).addClass("active");
    $(".product-details-large .tab-pane").removeClass("active show");
    $(".product-details-large " + $href).addClass("active show");
  });
})(jQuery);



// ======================================


// 1. Preloader
$(window).on("load", function () {
  $(".preloader").fadeOut(500);
}); 

// 2. Scroll to top
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 200) {
    $(".scroll-to-top").fadeIn(200);
  } else {
    $(".scroll-to-top").fadeOut(200);
  }
});

$(".scroll-to-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 1000, "easeInOutExpo");
  return false;
} );
// 3. Nice Select 
$("select").niceSelect();
// 4. Datepicker  
$(".datepicker").datepicker({
  format: "mm/dd/yyyy",
  autoclose: true,
});
// 5. Range Slider  
$(".range-slider").each(function () {
  var $this = $(this);
  var min = $this.data("min");
  var max = $this.data("max");
  var from = $this.data("from");
  var to = $this.data("to");
  var step = $this.data("step");

  $this.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: from,
    to: to,
    step: step,
    prefix: "$",
  });
});
// 6. Quantity Change
$(".quantity-change").on("click", function () {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  if ($button.text() === "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find("input").val(newVal);
});
// 7. Product Image Slider
$(".product-image-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  asNavFor: ".product-image-nav",
});
$(".product-image-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".product-image-slider",
  dots: false,
  arrows: true,
  centerMode: false,
  focusOnSelect: true,
  prevArrow:
    '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
  nextArrow:
    '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
});   



// ===========================

// 8. Product Filter
$(".product-filter").on("click", function () {
  $(".product-filter").removeClass("active");
  $(this).addClass("active");
  var filterValue = $(this).data("filter");
  $(".product-grid").isotope({ filter: filterValue });
});
// 9. Product Grid
$(".product-grid").isotope({
  itemSelector: ".product-item",
  layoutMode: "fitRows",
});
// 10. Product List
$(".product-list").isotope({
  itemSelector: ".product-item",
  layoutMode: "fitRows",
});
// 11. Product List View
$(".product-list-view").on("click", function () {
  $(".product-grid").removeClass("grid-view").addClass("list-view");
  $(".product-list").removeClass("list-view").addClass("grid-view");
});
// 12. Product Grid View
$(".product-grid-view").on("click", function () {
  $(".product-grid").removeClass("list-view").addClass("grid-view");
  $(".product-list").removeClass("grid-view").addClass("list-view");
});
// 13. Product Grid Filter
$(".product-grid-filter").on("click", function () {
  $(".product-grid").removeClass("list-view").addClass("grid-view");
  $(".product-list").removeClass("grid-view").addClass("list-view");
});
// 14. Product List Filter
$(".product-list-filter").on("click", function () {
  $(".product-grid").removeClass("grid-view").addClass("list-view");
  $(".product-list").removeClass("list-view").addClass("grid-view");
});
// 15. Product Filter Reset
$(".product-filter-reset").on("click", function () {
  $(".product-filter").removeClass("active");
  $(".product-grid").isotope({ filter: "*" });
});
// 16. Product Filter Apply
$(".product-filter-apply").on("click", function () {
  var filterValue = $(".product-filter.active").data("filter");
  $(".product-grid").isotope({ filter: filterValue });
});
// 17. Product Filter Close

$(".product-filter-close").on("click", function () {
  $(".product-filter").removeClass("active");
  $(".product-grid").isotope({ filter: "*" });
}
);
// 18. Product Filter Open
$(".product-filter-open").on("click", function () {
  $(".product-filter").addClass("active");
  $(".product-grid").isotope({ filter: "*" });
});
// 19. Product Filter Toggle
$(".product-filter-toggle").on("click", function () {
  $(".product-filter").toggleClass("active");
  $(".product-grid").isotope({ filter: "*" });
});
// 20. Product Filter Clear

$(".product-filter-clear").on("click", function () {
  $(".product-filter").removeClass("active");
  $(".product-grid").isotope({ filter: "*" });
} );
// 21. Product Filter Apply 
$(".product-filter-apply").on("click", function () {
  var filterValue = $(".product-filter.active").data("filter");
  $(".product-grid").isotope({ filter: filterValue });
} );


// =============================================
// ============================================


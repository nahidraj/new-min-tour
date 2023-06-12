$(function () {
  ("use strict");

  // banner slider js
  $(".banner-main").slick({
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    dots: true,
    fade: true,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // global search tour place js
  $(document).ready(function () {
    $(".search-place-input").on("click", function (e) {
      e.stopPropagation(); // Prevent event bubbling
      // Close all other open global-search-result-box
      $(".global-search-result-box")
        .not($(this).siblings(".global-search-result-box"))
        .hide();
      // Toggle the visibility of the current global-search-result-box
      $(this).siblings(".global-search-result-box").toggle();
    });

    // Close the global-search-result-box when clicking outside
    $(document).on("click", function () {
      $(".global-search-result-box").hide();
    });
  });

  // based on interest slider js
  $(".based-on-interest-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    dots: false,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // review slider js
  $(".review-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    autoplay: true,
    fade: true,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // common card slider js
  $(".common-card-slider").slick({
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    dots: false,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // blog details tour slider js
  $(".blog-details-tour-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    dots: false,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });
  // blog details blog slider js
  $(".blog-details-blog-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    dots: false,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });
  // tour category slider js
  $(".tour-category-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    dots: false,
    autoplay: false,
    slidesToScroll: 5,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // explore interest slider js
  $(".explore-interest-slider").slick({
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    dots: false,
    autoplay: false,
    slidesToScroll: 5,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // trip ideas slider js
  $(".trip-ideas-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    dots: false,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // promoted expariances slider js
  $(".promoted-expariances-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    dots: false,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // common testimonial slider js
  $(".common-testimonial-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    dots: false,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // compare experiance slider js
  $(".compare-experiance-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    dots: false,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // dynamic dropdown menu
  $(".sub-menu ul").hide();
  $(".sub-menu span").on("click", function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-angle-up fa-angle-down");
  });

  // show hide search result box js
  $(document).ready(function () {
    // Hide the search result initially
    $(".search-result").hide();

    // Show search result when the input box is clicked
    $(".common-search-box input").click(function (e) {
      e.stopPropagation();
      $(".search-result").show();
    });

    // Hide search result when clicking outside the input box or search result
    $(document).click(function () {
      $(".search-result").hide();
    });

    // Handle click on an li element inside the search result
    $(".search-result li").click(function (e) {
      e.stopPropagation();

      // Remove active class from all li elements
      $(".search-result li").removeClass("active");

      // Add active class to the clicked li element
      $(this).addClass("active");

      // Get the values from the clicked li element
      var h6Value = $(this).find("h6").text();
      var pValue = $(this).find("p").text();

      // Set the input value with the selected values
      $(".common-search-box input").val(h6Value + " - " + pValue);

      // Show the x mark icon and hide the magnifying glass icon
      $(".common-search-box i.fa-magnifying-glass").hide();
      $(".common-search-box i.fa-xmark").removeClass("d-none");

      // Hide the search result
      $(".search-result").hide();
    });

    // Handle click on the x mark icon
    $(".common-search-box i.fa-xmark").click(function (e) {
      e.stopPropagation();

      // Reset the input value
      $(".common-search-box input").val("");

      // Show the magnifying glass icon and hide the x mark icon
      $(".common-search-box i.fa-xmark").addClass("d-none");
      $(".common-search-box i.fa-magnifying-glass").show();
    });

    // Check input value on keyup event
    $(".common-search-box input").keyup(function () {
      var inputValue = $(this).val();

      // Show the magnifying glass icon and hide the x mark icon if the input value is empty
      if (inputValue === "") {
        $(".common-search-box i.fa-xmark").addClass("d-none");
        $(".common-search-box i.fa-magnifying-glass").show();
      } else {
        // Show the x mark icon and hide the magnifying glass icon if the input value is not empty
        $(".common-search-box i.fa-magnifying-glass").hide();
        $(".common-search-box i.fa-xmark").removeClass("d-none");
      }
    });
  });

  // show more expect item click js
  $(document).ready(function () {
    var itemsToShow = 3;
    var $expectItems = $(".expect-item");

    if ($expectItems.length <= itemsToShow) {
      $(".show-more-step").hide();
    }

    $expectItems.each(function (index) {
      if (index >= itemsToShow) {
        $(this).hide();
      }

      if (index === 2) {
        $(this).addClass("delete");
      }
    });

    $(".show-more-button").click(function () {
      $expectItems.show();
      $(".show-more-step").hide();
      $expectItems.removeClass("delete");
    });
  });

  // gallery popup js
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // show hide quantity box js
  $(document).ready(function () {
    $(".check-avail-counter-input").on("click", function (e) {
      e.stopPropagation(); // Prevent event bubbling
      $(".check-avail-counter-box").show();
    });

    $(".check-avail-counter-box").on("click", function (e) {
      e.stopPropagation(); // Prevent event bubbling
    });

    $(document).on("click", function () {
      $(".check-avail-counter-box").hide();
    });
  });

  // quantity plus minus js
  $(document).ready(function () {
    $(".cart-plus").on("click", function () {
      var parent = $(this).closest(".qnt-number");
      var input = parent.find(".cart-input");
      var value = parseInt(input.val());
      if (value < 7) {
        input.val(value + 1);
      }
      if (value + 1 >= 7) {
        $(this).prop("disabled", true).addClass("disabled");
      }
      parent
        .find(".cart-minus")
        .prop("disabled", false)
        .removeClass("disabled");
    });

    $(".cart-minus").on("click", function () {
      var parent = $(this).closest(".qnt-number");
      var input = parent.find(".cart-input");
      var value = parseInt(input.val());
      if (value > 1) {
        input.val(value - 1);
      }
      if (value - 1 <= 1) {
        $(this).prop("disabled", true).addClass("disabled");
      }
      parent.find(".cart-plus").prop("disabled", false).removeClass("disabled");
    });

    $(".qnt-number").each(function () {
      var input = $(this).find(".cart-input");
      var value = parseInt(input.val());
      if (value <= 1) {
        $(this).find(".cart-minus").prop("disabled", true).addClass("disabled");
      }
    });
  });

  // tour details sticky menu js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1610) {
      $(".sticky-top").addClass("shadow-lg").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-lg").css("top", "-100px");
    }
  });

  // tour details sticky menu clicked and go selected section

  $(document).ready(function () {
    // Smooth scroll on menu item click
    $("#menu a").click(function (e) {
      e.preventDefault();
      var target = $(this).attr("href");
      var offset = 110; // Adjust the offset as desired
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - offset,
        },
        0
      ); // Adjust the animation speed as desired
    });

    // Change active class based on scroll
    $(window).scroll(function () {
      var scrollPos = $(document).scrollTop();
      var offset = 120; // Adjust the offset as desired

      $("#menu a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (
          refElement.position().top - offset <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $("#menu li").removeClass("active");
          currLink.parent("li").addClass("active");
        } else {
          currLink.parent("li").removeClass("active");
        }
      });
    });
  });

  // tour details footer js
  $(document).ready(function () {
    var scrollThreshold = 1200; // Number of pixels to scroll before showing the footer
    var $footer = $(".tour-details-footer");

    $footer.hide();

    $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > scrollThreshold) {
        $footer.show();
      } else {
        $footer.hide();
      }
    });
  });

  // tour gallery small image slider js
  $(".small-image-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    slidesToScroll: 1,
    asNavFor: ".large-image",
  });

  // tour gallery large image slider js
  $(".large-image").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    asNavFor: ".small-image-slider",
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  $(".provider-slider-main").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    arrows: true,
    asNavFor: ".provider-sm-slider",
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // provider sm slider js
  $(".provider-sm-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    dots: false,
    arrows: false,
    asNavFor: ".provider-slider-main",
    autoplay: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "60px",
  });

  // tour details popup information js
  $(document).ready(function () {
    $(".large-image .image-item").on("click", function () {
      $(".tour-details-popup-information").addClass(
        "visible-tour-details-popup-information"
      );

      // Initialize the slick slider after the popup is shown
    });

    $(".close-popup").on("click", function () {
      $(".tour-details-popup-information").removeClass(
        "visible-tour-details-popup-information"
      );
      $(".traveler-slider-box").removeClass("traveler-visible");
      $(".provider-slider-box").removeClass("provider-hidden");
    });
  });

  // traveler big slider js
  $(".traveler-big-slider-images").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    arrows: true,
    asNavFor: ".traveler-sm-slider, .traveler-big-slider-info", // Include both slider classes
    autoplay: false,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  // traveler sm slider js
  $(".traveler-sm-slider").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    dots: false,
    arrows: false,
    asNavFor: ".traveler-big-slider-images, .traveler-big-slider-info", // Include both slider classes
    autoplay: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "60px",
  });

  // traveler big slider info js
  $(".traveler-big-slider-info").slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dots: false,
    fade: true,
    arrows: false,
    asNavFor: ".traveler-sm-slider, .traveler-big-slider-images", // Include both slider classes
    autoplay: false,
  });

  $(document).ready(function () {
    $(".traveler-slider-btn").on("click", function () {
      $(".traveler-slider-box").addClass("traveler-visible");
      $(".provider-slider-box").addClass("provider-hidden");
    });
    $(".provider-slider-btn").on("click", function () {
      $(".traveler-slider-box").removeClass("traveler-visible");
      $(".provider-slider-box").removeClass("provider-hidden");
    });
  });

  $(document).ready(function () {
    // Handle click events on li elements
    $(".popup-slider-menu").click(function () {
      // Remove active class from all li elements
      $(".popup-slider-menu").removeClass("active");

      // Add active class to the clicked li element
      $(this).addClass("active");
    });
  });

  // Animation on scroll
  AOS.init({
    once: false,
  });

  // code for mobile version menu
  $(document).ready(function () {
    // mobile menu info
    $(".mobile-menu .left-bar").on("click", function () {
      $(".mobile-menu-overlay").addClass("show-mobile-menu-overlay");
      $(".mobile-menu-sidebar").addClass("show-mobile-menu-sidebar");
    });

    $(".close-menu").on("click", function () {
      $(".mobile-menu-overlay").removeClass("show-mobile-menu-overlay");
      $(".mobile-menu-sidebar").removeClass("show-mobile-menu-sidebar");
    });

    $(".mobile-main-menus").on("click", function () {
      $(".child-mobile-menus").addClass("show-child-mobile-menus");
    });
    $(".close-child-mobile-menu").on("click", function () {
      $(".child-mobile-menus").removeClass("show-child-mobile-menus");
    });

    // mobile user info js
    $(".control-user-panel").on("click", function () {
      $(".mobile-user-overlay").addClass("show-mobile-user-overlay");
      $(".mobile-user-sidebar").addClass("show-mobile-user-sidebar");
    });

    $(".close-user").on("click", function () {
      $(".mobile-user-overlay").removeClass("show-mobile-user-overlay");
      $(".mobile-user-sidebar").removeClass("show-mobile-user-sidebar");
    });

    // mobile language popup js
    $(".mobile-language-popup").hide();
    $(".mobile-language-btn").on("click", function () {
      $(".mobile-language-popup").show();
    });
    $(".close-mobile-lang-popup").on("click", function () {
      $(".mobile-language-popup").hide();
    });

    // mobile currency popoup js
    $(".mobile-currency-popup").hide();
    $(".mobile-currency-btn").on("click", function () {
      $(".mobile-currency-popup").show();
    });
    $(".close-mobile-currency-popup").on("click", function () {
      $(".mobile-currency-popup").hide();
    });
  });

  // document.addEventListener("keydown", function (event) {
  //   if (event.ctrlKey && event.key === "s") {
  //     event.preventDefault();
  //     // You can optionally show a message or perform some other action here
  //   }
  // });

  // document.addEventListener("contextmenu", function (event) {
  //   event.preventDefault();
  //   // You can optionally show a message or perform some other action here
  // });

  // Disable keyboard events
  // document.addEventListener("keydown", function (event) {
  //   event.preventDefault();
  // });

  // // Disable mouse events
  // document.addEventListener("mousedown", function (event) {
  //   event.preventDefault();
  // });
  // document.addEventListener("mouseup", function (event) {
  //   event.preventDefault();
  // });
  // document.addEventListener("click", function (event) {
  //   event.preventDefault();
  // });
  // document.addEventListener("contextmenu", function (event) {
  //   event.preventDefault();
  // });
});

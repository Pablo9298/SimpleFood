$(function () {

  $('.intrigue__cards').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    arrows: true,

    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
    ]
  });

$('.burger-info__slide').slick();

$('.burger-tabs__top-item').on('click', function (e) {
  e.preventDefault();
  $('.burger-tabs__top-item').removeClass('burger-tabs__top-item--active');
  $(this).addClass('burger-tabs__top-item--active');

  $('.burger-tabs__content-item').removeClass('burger-tabs__content-item--active');
  $($(this).attr('href')).addClass('burger-tabs__content-item--active');
});


$('.star').rateYo({
  starWidth: "16px",
});

$('.burger').on('click', function () {
  $('.burger').toggleClass('burger--active');
  $('.logo__img').toggleClass('logo__img--active');
  $('.header__list').toggleClass('header__list--active');
  $('.footer__contacts').toggleClass('footer__contacts--active');
  $('body').toggleClass('lock');
});

$('.header__link, .header__logo').on('click', function () {
  $('.burger').removeClass('burger--active');
  $('.logo__img').removeClass('logo__img--active');
  $('.header__list').removeClass('header__list--active');
  $('.footer__contacts').removeClass('footer__contacts--active');
  $('body').removeClass('lock');
});

$('.catalog__btn').on('click', function () {
  $('.catalog__btn').toggleClass('catalog__btn--active');
  $('.catalog__filter').toggleClass('catalog__filter--active');
  $('.catalog__remove-filter').toggleClass('catalog__remove--active');
  $('body').toggleClass('lock');
});

$('.catalog__remove-filter').on('click', function () {
  $('.catalog__btn').removeClass('catalog__btn--active');
  $('.catalog__filter').removeClass('catalog__filter--active');
  $('.catalog__remove-filter').removeClass('catalog__remove--active');
  $('body').removeClass('lock');
});

var $range = $(".filter-price__line"),
  $inputFrom = $(".filter-price__from"),
  $inputTo = $(".filter-price__to"),
  instance,
  min = 0,
  max = 1200,
  from = 0,
  to = 0;

$range.ionRangeSlider({
  type: "double",
  min: min,
  max: max,
  onStart: updateInputs,
  onChange: updateInputs
});

instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");

  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });
});

$('.select-style, .burger-info__amount').styler();

$('.reviews__slider').slick({
  dots: true,
});

function mobileOnlySlider() {
  $(document).ready(function () {
    $('.restorant__cards', ).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      touchMove: true,
      dots: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          settings: "unslick"
        }
      }]
    });
  });
}
if (window.innerWidth < 651) {
  mobileOnlySlider();
}
$(window).resize(function (e) {
  if (window.innerWidth < 651) {
    if (!$('.restorant__cards').hasClass('slick-initialized')) {
      mobileOnlySlider();
    }

  } else {
    if ($('.restorant__cards').hasClass('slick-initialized')) {
      $('.restorant__cards').slick('unslick');
    }
  }
});

var mixer = mixitup('.popular__cards');

});

function mobileOnlySlider() {
  $(document).ready(function () {
    $('.discount__cards').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      touchMove: true,
      dots: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          settings: "unslick"
        }
      }]
    });
  });
}
if (window.innerWidth < 992) {
  mobileOnlySlider();
}
$(window).resize(function (e) {
  if (window.innerWidth < 992) {
    if (!$('.discount__cards').hasClass('slick-initialized')) {
      mobileOnlySlider();
    }

  } else {
    if ($('.discount__cards').hasClass('slick-initialized')) {
      $('.discount__cards').slick('unslick');
    }
  }
});
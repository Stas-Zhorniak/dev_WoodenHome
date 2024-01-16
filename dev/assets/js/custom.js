$(document).ready(function(){
  $('.slider-cont').slick({
     dots: true,
     appendArrows: '.first-screen-nav',
     responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        }
      },
    ]
  });
});

const burger = document.querySelector('.hamburger');
burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
}
);

document.getElementById('file').onchange = function () {
  document.getElementById('file-name').innerHTML = this.value;
}

const checkButton = document.querySelectorAll('[type="checkbox"]');


checkButton.forEach (item => {
  item.closest('.input-box').classList.add('checkbox-padding')
})

mobileOnlySlider("#advantages-slider", true, false, 991);

function mobileOnlySlider ($slidername, $dots, $arrows, $breakpoint){
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: 'unslick'
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function() {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}

$('.template-cards').slick({
  dots: false,
  arrows: true,
  // appendArrows: '.delivery-nav',
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


function accordionBg() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  const removeItemBg = () => {
      accordionHeaders.forEach(header => {
          const accordionItem = header.closest(".accordion-item");
          if (accordionItem) {
              accordionItem.classList.remove("active-bg");
          }
      });
  }

  accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
          const accordionItem = header.closest(".accordion-item");

          if (accordionItem) {
              if (!accordionItem.classList.contains("active-bg")) {
                  removeItemBg(); // Закрываем предыдущий элемент, если открыт
              }

              accordionItem.classList.toggle("active-bg");
          }
      });
  });
}

accordionBg();

  function breakSpan(){
    const title = document.querySelectorAll("h2");
    title.forEach(item => {
      const itemSpan = item.querySelector("span");
      const itemBr = document.createElement("br");
      if (itemSpan){
        item.insertBefore(itemBr, itemSpan);
      }
    })
  }
   
  breakSpan();
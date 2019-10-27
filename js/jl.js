window.onload = function() {
  var swiperV = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement: 'span',
      hideOnClick: true,
      clickable: false,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active'
    },
  })
}

function resumeAnimation(elementName, animationName, handle) {
  var list = document.querySelectorAll(elementName);
  var length = list.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < animationName.length; j++) {
      if (handle === 'add') {
        list[i].classList.add(animationName[j]);
      } else if (handle === 'remove') {
        list[i].classList.remove(animationName[j]);
      }
    }
  }
}
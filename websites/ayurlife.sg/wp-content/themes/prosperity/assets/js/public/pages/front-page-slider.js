'use strict';

(function () {
  'use strict';

  var featuredContent = document.getElementById('featured-content');

  if ('undefined' === typeof featuredContent) {
    return;
  }

  if (!featuredContent.classList.contains('glide')) {
    return;
  }

  var isAutoPlay =
    null !== featuredContent.getAttribute('data-autoplay')
      ? featuredContent.getAttribute('data-autoplay-speed')
      : false;
  var htmldirection =
    'rtl' === document.documentElement.getAttribute('dir') ? 'rtl' : 'ltr';
  var featuredContentCarousel = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    animationDuration: 0,
    animationTimingFunc: '',
    gap: 0,
    autoplay: isAutoPlay,
    direction: htmldirection,
  }); // Automated height on Carousel build

  featuredContentCarousel.on('build.after', function () {
    glideHandleHeight();
  }); // Automated height on Carousel change

  featuredContentCarousel.on('run.after', function () {
    glideHandleHeight();
  });
  featuredContentCarousel.mount(); // Display the slider

  featuredContent.classList.add('loaded');
  var featuredLoader = document.getElementById('featured-loader');
  featuredLoader.parentNode.removeChild(featuredLoader); // Resize height

  function glideHandleHeight() {
    var activeSlide = featuredContent.querySelector('.glide__slide--active');
    var activeSlideHeight = activeSlide ? activeSlide.offsetHeight : 0;
    var glideTrack = featuredContent.querySelector('.glide__track');
    var glideTrackHeight = glideTrack ? glideTrack.offsetHeight : 0;

    if (activeSlideHeight !== glideTrackHeight) {
      glideTrack.style.height = ''.concat(activeSlideHeight, 'px');
    }
  }

  if (isAutoPlay) {
    try {
      var featuredContentSection = document.getElementById('featured-content');
      var io = new IntersectionObserver(
        function (entries) {
          if (entries[0].intersectionRatio <= 0) {
            featuredContentCarousel.pause();
          }
        },
        {
          threshold: [0],
        }
      ); // Start observing.

      io.observe(featuredContentSection);
    } catch (e) {}
  }
})();

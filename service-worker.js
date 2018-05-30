/* Cache versions which are supposed to be used */
var expectedCaches = ['v1'];

/* Cache all data from our site for offline viewing 
 * Change version number when cache is updated */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(
        [
          '',
          '/',
          'index.html',
          'blog.html',
          'works.html',
          'css/animate.css',
          'css/animations.css',
          'css/bootstrap.css',
          'css/color.css',
          'css/custom-style.css',
          'css/flexslider.css',
          'css/jpreloader.css',
          'css/mb.YTPlayer.css',
          'css/owl.carousel.css',
          'css/owl.theme.css',
          'css/owl.transitions.css',
          'css/plugin.css',
          'css/prettyPhoto.css',
          'css/rev-settings.css',
          'css/style.css',
          'js/bootstrap.min.js',
          'js/classie.js',
          'js/countUp.min.js',
          'js/custom.js',
          'js/designesia.js',
          'js/device.min.js',
          'js/easing.js',
          'js/ender.js',
          'js/html5shiv.js',
          'js/jpreLoader.js',
          'js/jpreLoader.min.js',
          'js/jquery.backstretch.min.js',
          'js/jquery.countTo.js',
          'js/jquery.flexslider-min.js',
          'js/jquery.isotope.min.js',
          'js/jquery.mb.YTPlayer.js',
          'js/jquery.min.js',
          'js/jquery.prettyPhoto.js',
          'js/jquery.scrollto.js',
          'js/jquery.stellar.min.js',
          'js/jquery.tubular.1.0b.js',
          'js/jquery.tubular.1.0.js',
          'js/jquery.ui.map.js',
          'js/jquery.ui.totop.js',
          'js/map.js',
          'js/maps.api.js',
          'js/owl.carousel.js',
          'js/validation.js',
          'js/video.resize.js',
        ]
      );
    })
  );
});



/* Fall back onto the cache if fetch from the network fails */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});



/* Delete any old caches in case of updates */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(function(keys) { 
      return Promise.all(keys.map(function(key) {
        if (!expectedCaches.includes(key)) {
          return caches.delete(key);
        } 
      }));
    })
  );
});

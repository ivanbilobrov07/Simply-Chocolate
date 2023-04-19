jQuery(document).ready(function ($) {
  (function initPlayVideo() {
    var $videoCover = $('.how-made-video-cover');
    var $videoPlayerIframe = $('.how-made-video-player iframe');

    $videoCover.on('click', function () {
      $videoCover.fadeOut();
      $videoPlayerIframe[0].src += '&autoplay=1';
    });
  })();
});

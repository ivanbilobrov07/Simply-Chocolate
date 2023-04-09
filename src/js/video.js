var image = document.getElementById('image');
var video = document.getElementById('video');
var iconPlay = document.getElementById('icon_play');

image.addEventListener('click', function () {
  video.src += '?autoplay=1';

  video.style.display = 'block';
  image.style.display = 'none';
  iconPlay.style.display = 'none';
});

iconPlay.addEventListener('click', function () {
  video.src += '?autoplay=1';

  video.style.display = 'block';
  image.style.display = 'none';
  iconPlay.style.display = 'none';
});

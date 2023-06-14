function toggleGif() {
  const image = document.querySelector('.image');
  const gif = document.querySelector('.gif');
  const rotateButton = document.querySelector('.rotate-button');
  const closeButton = document.querySelector('.close-button');

  if (image.style.display === 'none') {
    image.style.display = 'block';
    gif.style.display = 'none';
    rotateButton.style.display = 'block';
    closeButton.style.display = 'none';
  } else {
    image.style.display = 'none';
    gif.style.display = 'block';
    rotateButton.style.display = 'none';
    closeButton.style.display = 'block';
  }
}

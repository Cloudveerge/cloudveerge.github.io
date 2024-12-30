function createSnowflakes() {
  for (let i = 0; i < 20; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(snowflake);
  }
}

createSnowflakes();

function downloadImage() {
  const imgSrc = document.querySelector('img').src;
  const a = document.createElement('a');
  a.href = imgSrc;
  a.download = 'random-face.jpg';
  a.click();
}

function generateNewImage() {
  const imgElement = document.getElementById('randomImage');

  imgElement.style.animation = 'fadeOut 1s ease-out forwards';

  const newImageUrl = 'https://thispersondoesnotexist.com/?' + new Date().getTime();
  
  const tempImage = new Image();
  tempImage.src = newImageUrl;

  imgElement.src = newImageUrl;

  tempImage.onload = function() {
    imgElement.style.animation = 'fadeIn 1s ease-out forwards';
  };
}

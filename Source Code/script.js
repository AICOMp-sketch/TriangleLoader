// Light sparkle animation toggle
const loadingText = document.querySelector(".loading-text");

setInterval(() => {
  loadingText.classList.toggle("flash");
}, 1000);
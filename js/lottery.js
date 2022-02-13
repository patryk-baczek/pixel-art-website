/*
1.after clicking on diva chest
2. load all pictures from the img folder to the memory
3. have a number between 0 and 5
4. Save the drawn image to diva # random-image
5. hide diva chest
*/

// Funkcje
function showCountdown(time) {
  showTimer();
  showText();
  setInterval(() => countdown(time), 1000);
}
function showText() {
  const timerText = document.querySelector('#timer-text');
  timerText.classList.remove("hide");
}

function showTimer() {
  const timer = document.querySelector('#timer');
  timer.classList.remove("hide");
 }

function hideChest() {
  const chest = document.querySelector('#chest');
  chest.classList.add("hide");
}

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  

  function countdown(nextRandomDate) {
    var now = new Date().getTime();

    var distance = nextRandomDate - now;
  
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const timeAsText = `${hours}:${minutes}:${seconds}`;
    const timer = document.querySelector('#timer');
    timer.innerHTML = timeAsText;
  }

  function showRandomImage() {
    const pathsToImages = ['img/statki_kosmiczne.png', 'img/boss.png', 'img/abstrakcja.png', 'img/diabelek.png', 'img/strona1.png', 'img/png.png'];
    const randomNumber = randomIntFromInterval(0, pathsToImages.length);
    const path = pathsToImages[randomNumber];
    const randomImage = document.querySelector('#random-image');

    randomImage.innerHTML = `<img src='${path}' />`;
  }


  function saveCountdownFinish(nextRandomDate) {
    localStorage.setItem("date", nextRandomDate);
  }

  function getCountdownFinish() {
   return new Date(parseInt(localStorage.getItem("date")));
  }

  function showChest() {
    const chest = document.querySelector('#chest');
    chest.classList.remove("hide");

    chest.addEventListener('click', event => {
      showRandomImage();
      hideChest();
  
      const countdownHours = 24;
      const currentDate = new Date();
      const nextRandomDate = currentDate.setHours(currentDate.getHours() + countdownHours);
  
      saveCountdownFinish(nextRandomDate);
      showCountdown(nextRandomDate);
  
    });
  }
  // Program
 
const countdownFromLocalStorage = getCountdownFinish();
const nowDate = new Date();
debugger;
if(nowDate > countdownFromLocalStorage)
{
  showChest();
} 
else
{
  showCountdown(countdownFromLocalStorage);
}







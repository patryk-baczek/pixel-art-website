/*
1.after clicking on diva chest
2. load all pictures from the img folder to the memory
3. have a number between 0 and 5
4. Save the drawn image to diva # random-image
5. hide diva chest
*/
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  
const chest = document.querySelector('#chest');
chest.addEventListener('click', event => {

    const pathsToImages = ['img/statki_kosmiczne.png', 'img/boss.png', 'img/abstrakcja.png', 'img/diabelek.png', 'img/strona1.png', 'img/png.png']
    const randomNumber = randomIntFromInterval(0, pathsToImages.length)    
    const path = pathsToImages[randomNumber];
    const randomImage = document.querySelector('#random-image');

    randomImage.innerHTML = `<img src='${path}' />`;


});
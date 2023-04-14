const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body')


startBtn.addEventListener("click", () => {
    startId = setInterval(() => {
        changeColor();
       startBtn.disabled = true;
        console.log(changeColor);
    }, 1000);

});

stopBtn.addEventListener("click", () => {
    clearInterval(startId);
    startBtn.disabled = false;
})



function changeColor() {
    const color = getRandomHexColor();
    body.style.background = color;
  }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
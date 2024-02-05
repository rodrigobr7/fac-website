const intro = document.querySelector('.home p');

function wait(ms = 0) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomNumber(min = 10, max = 80) {
    return Math.floor(Math.random() * (max - min) + min);
}

function drawIntro(el) {
    let index = 1;
    const text = el.textContent;
     async function drawLetter(){
        el.textContent = text.slice(0, index);
        index++;
         await wait(randomNumber());
        if(index <= text.length){
            drawLetter();
        }
    }
    drawLetter();
}

drawIntro(intro);
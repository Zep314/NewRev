const newGameButton = document.getElementById('newGameButton');
const resultWindow = document.getElementById('resultWindow');
const closeButtonResultWindow = document.getElementById('closeButtonResultWindow');
const resetGameButton = document.getElementById('resetGameButton');
const statusText = document.getElementById('status_text');


newGameButton.addEventListener('click', function() {
    gameOver();
});

closeButtonResultWindow.addEventListener('click', function() {
    statusText.textContent = 'Game in progress...';
    resultWindow.style.display = 'none';
    enableElements();
});

function gameOver() {
    statusText.textContent = 'Game over!';
    resultWindow.style.display = 'grid';
    disableElements();
}

function disableElements() {
    newGameButton.setAttribute("disabled","disabled");
    newGameButton.className = 'button1disabled';
    resetGameButton.setAttribute("disabled","disabled");
    resetGameButton.className = 'button1disabled';
}

function enableElements() {
    newGameButton.removeAttribute("disabled");
    newGameButton.className = 'button1';
    resetGameButton.removeAttribute("disabled");
    resetGameButton.className = 'button1';
}
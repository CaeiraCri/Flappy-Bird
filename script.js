const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const gameContainer = document.getElementById('game-content');

const flappyImg = new Image();
flappyImg.src = 'assets/bird.png';

const FLAP_SPEED = -5;
const FLAP_WIDTH = 40;
const FLAP_HEIGHT = 40;
const PIPE_WIDTH = 50;
const PIPE_GAP = 125;

let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAcceleration = 0.1;

let pipeX = 400;
let pipeY = canvas.height - 200;

let scoreDiv = document.getElementById('score-display');
let score = 0;
let bestScore = 0;

document.body.onkeyup = function(event) {
    if (event.code == 'Space') {
        birdVelocity = FLAP_SPEED;
    }
}

function increaseScore() {

}

function collisionCheck() {
    
}

function showEndMenu() {
    document.getElementById('end-menu').style.display = 'block';
    gameContainer.classList.add('backdrop-blur');
    document.getElementById('end-score').innerHTML = score;    
}

function hideEndMenu() {
    document.getElementById('end-menu').style.display = 'none';
    gameContainer.classList.remove('backdrop-blur');
    document.getElementById('end-score').innerHTML = score;    
}

function resetGame() {

}

function endGame() {

}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(flappyImg, birdX, birdY);

    ctx.fillStyle = '#333';
    ctx.fillRect(pipeX, -100, PIPE_WIDTH, pipeY);
    ctx.fillRect(pipeX, pipeY + PIPE_GAP, PIPE_WIDTH, canvas.height - pipeY);

    pipeX -= 1.5;

    if (pipeX < -50) {
        pipeX = 400;
        pipeY = Math.random() * (canvas.height - PIPE_GAP) + PIPE_WIDTH;
    }

    birdVelocity += birdAcceleration;
    birdY += birdVelocity;

    if (collisionCheck()) {
        endGame();
        return;
    }

    requestAnimationFrame(gameLoop);
}

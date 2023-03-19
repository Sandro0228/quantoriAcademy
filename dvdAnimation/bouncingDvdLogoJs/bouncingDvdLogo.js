let x;
let y;

let xSpeed;
let ySpeed;

let dvd;
let randomColor;

let canvas = document.getElementById("screen");
let context = canvas.getContext("2d");

function setup(){
    drawBackground();

    x = Math.random(width);
    y = Math.random(height);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    pickColor();
    }

function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    randomColor = 'rgb('+r+','+g+', '+b+')';
}

function drawBackground(){
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height)
}

function drawLogo(){
    
}

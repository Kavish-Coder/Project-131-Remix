img="";

function preload() {
    img=loadImage("desk.jpg")
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);    
    fill("#ff0000");
    text("Desk" ,256,36,30,30);
    noFill();
    stroke("#ff0000");
    rect(50,30,500,300);
}

function back() {
    window.location="index.html";
}     
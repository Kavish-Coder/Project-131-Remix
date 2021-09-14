img="";

function preload() {
    img=loadImage("tvandac.jpg")
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#ff0000");
    text("Tv" ,256,200,30,30);
    noFill();
    stroke("#ff0000");
    rect(250,197,270,150);
    
    fill("#ff0000");
    text("Ac" ,256,36,30,30);
    noFill();
    stroke("#ff0000");
    rect(250,30,250,100);
}

function back() {
    window.location="index.html";
}
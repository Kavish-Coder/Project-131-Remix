img="";

function preload() {
    img=loadImage("waterbottle.png")
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);    
    fill("#ff0000");
    text("Bottle" ,256,36,30,30);
    noFill();
    stroke("#ff0000");
    rect(200,30,200,350);
}

function back() {
    window.location="index.html";
}     
        
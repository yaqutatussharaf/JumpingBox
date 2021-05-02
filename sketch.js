var canvas;
var music;
var box1,box2,box3,box4,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,585,190,15);
    box1.shapeColor = "lightGreen";
    box2 = createSprite(300,585,190,15);
    box2.shapeColor = "red";
    box3 = createSprite(500,585,190,15);
    box3.shapeColor = "lightBlue";
    box4 = createSprite(700,585,190,15);
    box4.shapeColor = "yellow";


    //create box sprite and give velocity

    ball = createSprite(300,30,40,40);
    ball.x = Math.round(random(15,700))
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background("black");

    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = box1.shapeColor
        music.play();
    }

    if(box2.isTouching(ball)){
        ball.shapeColor = box2.shapeColor;
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = box3.shapeColor
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = box4.shapeColor
    }

    drawSprites();
}

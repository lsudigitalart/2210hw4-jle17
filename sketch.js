//Jessica Le HW4

var ed = 40;  //target diameter
var ey1 = 0;  //slower drop speed
var ey2 = 0;  //faster drop speed
var ey3;  //bullet speed

var ex1 = 40; //ellipse 1
var ex2 = 200;
// var ex3 = 360;
var ex4 = 120;
var ex5 = 280;
var ex6 = 120;
var ex7 = 360;

var rx = 150;       //rectangle x-position
var ry = 550;       //rectangle y-position
var rw = 100;       //rectangle width
var rh = 50;        //rectangle height
var speed = 2;


function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(100);

  ey1 = ey1 + 2;
  ellipse(ex1, ey1, ed);
  ellipse(ex2, ey1 - 30, ed);


  ey2 = ey2 + 3;
  ellipse(ex4, ey2, ed);
  ellipse(ex7, ey2 - 240, ed);

  rect(rx, ry, rw, rh);      //moving block

    //shooter controllers
    if(keyIsPressed){

      if (key == "a"){
        println("left");
        rx -= speed;
      }

      if (key == "d"){
        println("right");
        rx += speed;
      }

    }

    if (ex1 + 20 > rx && ex1 < rx + rw + 20   //good; ellipse1
    && ey1 < ry + rh + 20 && ey1 + 20 > ry){
      background(255, 0, 0, 100);
    }

    if (ex2 + 20 > rx && ex2 < rx + rw + 20   //good ellipse3
    && ey1 - 30 < ry + rh + 20 && ey1 - 30 + 20 > ry){
      background(0, 255, 0, 100);
    }

    if (ex7 + 20 > rx && ex7 < rx + rw + 20   //good
    && ey1 < ry + rh + 40 && ey1 + 40 > ry){
      background(0, 0, 255, 100);
    }

    if (ex4 + 20 > rx && ex4 < rx + rw + 20   //good
    && ey2 < ry + rh + 20 && ey2 + 20 > ry){
      background(0, 0, 0, 100);
    }

    if (ex6 + 20 > rx && ex6 < rx + rw + 20
    && ey2 < ry + rh + 20 && ey2 + 20 > ry){
      background(255, 211, 0, 100);
    }



}

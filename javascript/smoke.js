
var canvas = document.getElementById("mySmoke");
var c = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;


//dx and dy is how fast smokes will move
function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;  //speed for x
    this.dy = dy;   //speed for y
    this.radius = radius
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = 'rgba(169,169,169,0.7)';
        c.fill();

    }
    var orgRadius = this.radius; 
    this.update = function() {   
    var ranRadius = Math.random() * (0.3 - 0.02) + 0.02;
    //smoke movements
    this.x-= this.dx;
    this.y-= this.dy;
    if (slider.value > 1){
        this.x-= slider.value;
        this.y-= slider.value;
    }
    this.radius+=ranRadius;
    this.draw();
    //reset smoke position if out of view
    if (this.x < 0 || this.y < 0 ) {
    var ranX = Math.random() * (220 - 190) + 190;
    this.x = ranX;
    this.y = 200;
    this.radius = orgRadius;
    
    }    
}
    
}



//the smoke particles
var ranX = Math.random() * (220 - 190) + 190;
var ranDX = Math.random() * (2 - 1) + 1;
var ranX2 = Math.random() * (220 - 190) + 190;
var ranDX2 = Math.random() * (2 - 1) + 1;
var ranX3 = Math.random() * (220 - 190) + 190;
var ranDX3 = Math.random() * (2 - 1) + 1;
var ranDX4 = Math.random() * (2 - 1) + 1;

var circle;
var circle2;
var circle3;
var circle4;
var circle5;
var circle6;
var circle7;

var slider;

function init(){
     circle = new Circle(200, 200, 1, 1, 10);
     circle2 = new Circle(220, 200, 2, 2, 10);
     circle3 = new Circle(190, 200, 1.5, 1.5, 12);
     circle4 = new Circle(ranX, 200, ranDX, 1.5, 12);
     circle5 = new Circle(ranX2, 200, ranDX2, 2, 12);
     circle6 = new Circle(ranX3, 200, 2, ranDX3, 11);
     circle7 = new Circle(200, 200, 1, ranDX4, 12);    
    
     slider = document.getElementById("slider");

    
     animate();
     drawCar();
    
}

//updating smoke movements
function animate(){

    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    
        circle.update();
        circle2.update();
        circle3.update();
        circle4.update();
        circle5.update();
        circle6.update();
        circle7.update();

}




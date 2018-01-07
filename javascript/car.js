function drawCar() {
		var shapes = document.getElementById("myCar");
		var contextShapes = shapes.getContext("2d");
            
        //color patterns
        var my_gradient=contextShapes.createLinearGradient(120,300,170,0);
        my_gradient.addColorStop(0,"black");
        my_gradient.addColorStop(0.5,"red");
        my_gradient.addColorStop(1,"white");
        
     
        var wheelG=contextShapes.createLinearGradient(120,300,170,0);
        wheelG.addColorStop(0,"black");
        wheelG.addColorStop(0.45,"gray");
        wheelG.addColorStop(1,"white");
        
        
        
        var windows = contextShapes.createRadialGradient(285, 90, 7, 188, 170, 200);
        windows.addColorStop(0, 'white');           
        windows.addColorStop(1, 'black');

        var hoodcolor=contextShapes.createLinearGradient(150, 100, 400, -100);
        hoodcolor.addColorStop(0, 'red');
        hoodcolor.addColorStop(2/10, 'black');           
        hoodcolor.addColorStop(3/10, 'red');
        hoodcolor.addColorStop(4/10, 'white');
        hoodcolor.addColorStop(5/10, 'red');
        hoodcolor.addColorStop(3/6, 'white');
        hoodcolor.addColorStop(5/10, 'white');
        hoodcolor.addColorStop(6/10, 'red');
        hoodcolor.addColorStop(6/10, 'white');
        hoodcolor.addColorStop(7/10, 'red');        
        hoodcolor.addColorStop(8/10, 'black');
    
        
        
        //right side mirror
        contextShapes.beginPath();
        contextShapes.rect(490, 143, 30, 13);
        contextShapes.fillStyle = 'black';
        contextShapes.fill();        
        contextShapes.strokeStyle = 'black';
        contextShapes.stroke();
        
        //back decro
        contextShapes.beginPath();
        contextShapes.rect(108, 129, 100, 10);
        contextShapes.fillStyle = 'black';
        contextShapes.fill();        
        contextShapes.strokeStyle = 'black';
        contextShapes.stroke();
    
        //pipe
        contextShapes.beginPath();
        contextShapes.rect(97, 189, 100, 15);
        contextShapes.fillStyle = 'black';
        contextShapes.fill();        
        contextShapes.strokeStyle = 'black';
        contextShapes.stroke();
        
        //car general shape
        contextShapes.beginPath();
        contextShapes.moveTo(550, 175);
        contextShapes.lineTo(410, 100);
        contextShapes.lineTo(200, 110);
        contextShapes.lineTo(100, 160);
        contextShapes.lineTo(100, 250);
        contextShapes.lineTo(340, 310);
        contextShapes.lineTo(570, 280);
        contextShapes.closePath();
        contextShapes.stroke();
        contextShapes.fillStyle = my_gradient;
        contextShapes.fill();
        
        //car hood
        contextShapes.beginPath();
        contextShapes.moveTo(290, 200);
        contextShapes.bezierCurveTo(335,325,650,280,550,175);
        contextShapes.closePath();
        contextShapes.stroke();
        contextShapes.fillStyle = hoodcolor;
        contextShapes.fill();
        
        //left lights
        contextShapes.beginPath();
        contextShapes.moveTo(340, 220);
        contextShapes.lineTo(385, 228);
        contextShapes.lineTo(375, 245);
        contextShapes.fillStyle = "yellow";
        contextShapes.shadowBlur = 15;
        contextShapes.shadowColor = "yellow";       
        contextShapes.shadowOffsetX = 0;
        contextShapes.shadowOffsetY = 0;
        contextShapes.fill();
        contextShapes.closePath();
        contextShapes.stroke();
        //right lights
        contextShapes.beginPath();
        contextShapes.moveTo(525, 215);
        contextShapes.lineTo(550, 195);
        contextShapes.lineTo(540, 225);       
        contextShapes.fillStyle = "yellow";       
        
        contextShapes.closePath();
        contextShapes.stroke();
        contextShapes.fill();
        
        //car front tires
        contextShapes.beginPath();
        contextShapes.arc(275, 270, 43, 0, Math.PI*2, true);
        contextShapes.closePath();
        contextShapes.stroke();
        contextShapes.fillStyle = "black";
        contextShapes.fill();
        
        contextShapes.beginPath();
        contextShapes.arc(275, 270, 38, 0, Math.PI*2, true);
        contextShapes.closePath();
        contextShapes.stroke();
        contextShapes.fillStyle = wheelG;
        contextShapes.fill();
        //car back tire
        contextShapes.beginPath();
        contextShapes.arc(130, 240, 37, 0, Math.PI*2, true);
        contextShapes.closePath();
        contextShapes.stroke();
        contextShapes.fillStyle = "black";
        contextShapes.fill();
        
        contextShapes.beginPath();
        contextShapes.arc(130, 240, 32, 0, Math.PI*2, true);
        contextShapes.closePath();
        contextShapes.stroke();
        contextShapes.fillStyle = wheelG;
        contextShapes.fill();
        
        
        //front windows
        
        contextShapes.beginPath();
        contextShapes.moveTo(540, 173);
        contextShapes.lineTo(420, 110);
        contextShapes.lineTo(280, 120);
        contextShapes.lineTo(320, 190);
        contextShapes.fillStyle = windows;
        contextShapes.fill();
        contextShapes.closePath();        
        contextShapes.stroke();
        
        //side window
        contextShapes.beginPath();
        contextShapes.moveTo(300, 190);
        contextShapes.quadraticCurveTo(270,66,120,160);
        contextShapes.fillStyle = windows;
        contextShapes.fill();
        contextShapes.closePath();
        contextShapes.stroke();
        
        //side mirror       
        contextShapes.beginPath();
        contextShapes.rect(270, 166, 5, 30);
        contextShapes.fillStyle = 'black';
        contextShapes.fill();        
        contextShapes.strokeStyle = 'black';
        contextShapes.stroke();
        
        contextShapes.beginPath();
        contextShapes.rect(230, 166, 40, 20);
        contextShapes.fillStyle = 'black';
        contextShapes.fill();        
        contextShapes.strokeStyle = 'black';
        contextShapes.stroke();
}
var cvs = document.getElementById('cvs');
var ctx= cvs.getContext('2d'); 

cvs.width = window.innerWidth;
cvs.height = window.innerHeight; 

// ctx.fillStyle ='rgba(255, 0, 0, 0.25)';
// ctx.fillRect(500, 400, 100, 100); 
// ctx.fillStyle ='rgba(0 , 0, 255, 0.15)';
// ctx.fillRect(200, 350, 100, 200); 

// Line
// ctx.beginPath();
// ctx.moveTo(500, 400); 
// ctx.lineTo(200, 350);
// ctx.lineTo(700, 800);
// ctx.lineTo(900, 1000);
// ctx.strokeStyle = "green";
// ctx.stroke();

// Arc
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();
// function colorRandom() {
// 	var hex = "0123456789abcdef";
// 	var color = "";
// 	for (var i = 6; i > 0; i--) {
// 		color += Math.floor(Math.random()*hex.length);
// 	}
// 	color.strokeStyle = "#" + color;
// 	console.log(ctx.strokeStyle, color); 
// }

// for (var i = 0; i < 3; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	ctx.beginPath();
// 	ctx.arc(x, y, 30, 0, Math.PI * 2, false);
// 	ctx.strokeStyle = "blue";
// 	ctx.stroke();
// 	}



function Circle (x, y, dx, dy, radius) {
	    this.x = x;
	    this.y = y;
	    this.dx = dx;
	    this.dy = dy;
	    this.radius = radius; 

	    this.draw = function() {
		ctx.beginPath();
	    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
	    ctx.strokeStyle = "blue";
	    ctx.stroke();
	  }

	    this.update = function() {
		  	if (this.x + this.radius > innerWidth || this.x - radius < 0) {
		    	this.dx = -dx;
		    }


		    if (this.y + this.radius > innerHeight || this.y - radius < 0) {
		    	this.dy = -dy;
		    }

			    this.x += this.dx;
			    this.y += this.dy;

			    this.draw();
	   }

}


var circleArray = [];

for (var i = 0; i < 100; i++) {
	var radius = 30;
	var x = Math.random() * (innerWidth -radius * 2) + radius;
	var y = Math.random() * (innerHeight -radius * 2) + radius; 
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);


	circleArray.push(new Circle(x, y, dx, dy, radius));
	}


function animate() {  
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, innerWidth, innerHeight);

		for (var i= 0; i < circleArray.length; i++) {
			circleArray[i].update();
		}


	}

animate();
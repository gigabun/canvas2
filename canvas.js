var cvs = document.getElementById('cvs');
var c = cvs.getContext('2d'); 

cvs.width = window.innerWidth;
cvs.height = window.innerHeight; 

c.fillStyle ='rgba(255, 0, 0, 0.25)';
c.fillRect(500, 400, 100, 100); 
c.fillStyle ='rgba(0 , 0, 255, 0.15)';
c.fillRect(200, 350, 100, 200); 

// Line
c.beginPath();
c.moveTo(500, 400); 
c.lineTo(200, 350);
c.lineTo(700, 800);
c.lineTo(900, 1000);
c.strokeStyle = "green";
c.stroke();

// Arc
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

for (var i = 0; i < 3; i++) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = "blue";
	c.stroke();
	}
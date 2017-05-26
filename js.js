var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pi = Math.PI;
// Дальше с контекстом ctx работаем
// ctx.fillRect(x,y,w,h)
ctx.fillStyle='red';
ctx.fillRect(50,50,100,50);

ctx.fillStyle='blue';
ctx.fillRect(200,100,20,50);
//чистим
//чистим всю область сtx.clearRect(0,0,400,200)
ctx.clearRect(100,75,20,100);

//линия
ctx.beginPath();//начинаем новый путь
ctx.moveTo(200,50);//начало
ctx.lineTo(300,150);//конец
ctx.lineTo(350,50);//продолжить линию
ctx.strokeStyle='green';
ctx.lineWidth = '20';
ctx.lineCap ='round'//'square'
ctx.stroke();//обводка
///
ctx.clearRect(0,0,400,200);

// ctx.arc(x,y, radius, start_angle, end_angle, anticlockwise)// окружность или дуга
ctx.beginPath();//начинаем новый путь
ctx.fillStyle = 'cyan';
ctx.arc(100,100,75,0,pi/2,true);
ctx.fill();
ctx.closePath();//замыкает путь
ctx.stroke();//обводка

///-------------------

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
ctx2.fillStyle='red';
ctx2.fillRect(50,50,300,50);
ctx2.fillStyle='green';
ctx2.fillRect(60,60,300,50);
ctx2.fillStyle='blue';
ctx2.fillRect(70,70,300,50);


var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');
ctx3.fillStyle='green';
ctx3.fillRect(0,0,50,50);
ctx3.fillStyle='blue';
ctx3.fillRect(0,50,50,150);

ctx3.fillStyle='green';
ctx3.fillRect(100,50,50,80);
ctx3.fillStyle='blue';
ctx3.fillRect(100,130,50,120);

ctx3.fillStyle='green';
ctx3.fillRect(200,20,50,60);
ctx3.fillStyle='blue';
ctx3.fillRect(200,60,50,200);
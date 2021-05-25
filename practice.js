document.addEventListener("DOMContentLoaded", function(){
    const cv = document.getElementById('mycanvas');

    cv.width = 500;
    cv.height = 500;

    const ctx = cv.getContext('2d');

    // Rectangle
    ctx.fillStyle = 'green';
    ctx.fillRect(10,10,80,50);

    // Circle
    ctx.beginPath();
    ctx.arc(100,100,50,0,5 * Math.PI);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = 'orange';
    ctx.fill();
});

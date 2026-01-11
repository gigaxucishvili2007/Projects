const track = document.getElementById("tickerTrack");
const items = [...track.children];

items.forEach((item, index) => {
    let speed = 80; 
    let x = track.offsetWidth + (index * 200); 

    function move() {
        x -= 1; 
        item.style.transform = `translateX(${x}px)`;


        if (x < -item.offsetWidth) {
            x = track.offsetWidth;
        }
        requestAnimationFrame(move);
    }

    move();
});


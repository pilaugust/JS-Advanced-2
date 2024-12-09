const movingObject = document.getElementById("movingObject");

let positionX = 100;
let positionY = 100;
movingObject.style.left = positionX + 'px';
movingObject.style.top = positionY + 'px';

function updatePosition() {
    movingObject.style.left = positionX + 'px';
    movingObject.style.top = positionY + 'px';
}

document.addEventListener('keydown', (event) => {
    const step = 10;

    switch(event.key) {
        case 'ArrowUp':
            positionY -= step;
            break;
        case 'ArrowDown':
            positionY += step;
            break;
        case 'ArrowLeft':
            positionX -= step;
            break;
        case 'ArrowRight':
            positionX += step;
            break;
    }

    updatePosition();
});

document.addEventListener('click', (event) => {
    positionX = event.clientX - (movingObject.offsetWidth / 2);
    positionY = event.clientY - (movingObject.offsetHeight / 2);

    updatePosition();
});

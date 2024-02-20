const root = document.getElementById('root');

// STATE
let mouseDown = false;
let pressStartTime;
let ball;
let initialClickPosition;
let slingShot;
let centerPoint;
const scrollX = window.scrollX;
const scrollY = window.scrollY;

// EVENT
root.addEventListener('mousedown', (e) => {
    const x = e.clientX + scrollX;
  const y = e.clientY + scrollY;
    removeSlingshot();
    mouseDown = true;
    pressStartTime = Date.now();
    initialClickPosition = { x, y};

    setTimeout(() => {
        if (mouseDown && Date.now() - pressStartTime >= 500) {
            createBall(e.clientX, e.clientY);
            slingShot = new Slingshot(initialClickPosition.x, initialClickPosition.y);
        }
    }, 500);

    updateStatus();
});

root.addEventListener('mouseup', (e) => {
    mouseDown = false;
    clearTimeout();
    removeSlingshot();
    removeCenterPoint();
    updateStatus();
    ball && ball.moveHorizontal(slingShot.getDistance(), 12);
});

root.addEventListener('mousemove', (e) => {
    const x = e.clientX + scrollX;
  const y = e.clientY + scrollY;
    if (mouseDown && ball) {
        const deltaX = e.clientX - initialClickPosition.x;
        const deltaY = e.clientY - initialClickPosition.y;

        updateBallPosition(initialClickPosition.x, initialClickPosition.y, deltaX, deltaY);
        slingShot && slingShot.update(initialClickPosition.x, initialClickPosition.y, e.clientX, e.clientY);
        console.log(slingShot.getDistance());
    }
});

// FUNCTIONS
function updateStatus() {
    let status = mouseDown ? 'Basılı Tutuluyor' : 'Basılı Tutulmuyor';
    console.log(status);
}

class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.createElement('div');
        this.element.className = 'ball';
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
        root.appendChild(this.element);
        console.log('Ball Created');
    }

    updatePosition(x, y) {
        this.x = x;
        this.y = y;
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    }

    updateTransform(targetRotation, duration = 1000) {
        const startTime = performance.now();
        const startRotation = parseFloat(this.element.style.transform.replace(/[^0-9.-]+/g, '')) || 0;
        const rotationDiff = targetRotation - startRotation;

        const animateTransform = (timestamp) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1); // Progress should not exceed 1
            const currentRotation = startRotation + (rotationDiff * progress);
            this.element.style.transform = `rotate(${currentRotation}deg)`;

            if (progress < 1) {
                requestAnimationFrame(animateTransform);
            }
        };

        requestAnimationFrame(animateTransform);
    }

    remove() {
        this.element.remove();
    }

    moveHorizontal(distance, speed) {
        let targetX = this.x + distance;
        let currentX = this.x;

        let move = () => {
            if ((distance > 0 && currentX < targetX) || (distance < 0 && currentX > targetX)) {
                currentX += (distance > 0) ? speed : -speed;
                this.updatePosition(currentX, this.y);
                requestAnimationFrame(move);
            }
        };

        move();
    }

}

function createBall(x, y) {
    removeBalls();
    ball = new Ball(x, y);
    createCenterPoint(x, y);
}

function removeBalls() {
    const balls = document.querySelectorAll('.ball');
    balls.forEach((ball) => {
        ball.remove();
    });
}

class CenterPoint {
    constructor(x, y) {
        this.element = document.createElement('div');
        this.element.className = 'center-point';
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
        root.appendChild(this.element);
    }

    remove() {
        this.element.remove();
    }
}

function createCenterPoint(x, y) {
    centerPoint = new CenterPoint(x + window.scrollX, y + window.scrollY);
}

function removeCenterPoint() {
    centerPoint && centerPoint.remove();
}

class Slingshot {
    constructor(startX, startY) {
        this.element = document.createElement('div');
        this.element.className = 'slingshot-line';
        this.element.style.zIndex = '-1';
        root.appendChild(this.element);
        this.update(startX, startY, startX, startY);
    }

    remove() {
        this.element.remove();
    }

    update(startX, startY, endX, endY) {
        const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
        const angle = Math.atan2(endY - startY, endX - startX);

        this.element.style.width = distance + 'px';
        this.element.style.transform = `rotate(${angle}rad)`;
        this.element.style.transformOrigin = '0 0';
        this.element.style.left = startX + 'px';
        this.element.style.top = startY + 'px';
    }

    getDistance() {
        // remove px inthe width
        const distance = parseInt(this.element.style.width);

        return distance * 2;
    }

}

function removeSlingshot() {
    slingShot && slingShot.remove();
}

function updateBallPosition(initialX, initialY, deltaX, deltaY) {
    const newX = initialX + deltaX;
    const newY = initialY + deltaY;

    ball.updatePosition(newX, newY);

    const rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    ball.updateTransform(rotation);
}

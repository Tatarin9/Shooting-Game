let life = 10;  //
let lastLoopRun = 0; 
let score = 0; 
let iterations = 0; 
let enemies = new Array(); 
// let lasers = new Array(); 
let enemy;

const startBtn = document.getElementById('start-button');  //!!!

startBtn.addEventListener('click', loop);  //!!!

function clickHandler() {
    const shootingArea = document.getElementById('shooting-area');
    shootingArea.addEventListener('click', getX_pos);
}

clickHandler(); 

function getX_pos (event) {
        shooting(event.clientX);
}

function shooting (x_coord) {
    const shootingArea = document.getElementById('shooting-area');
    const shoot = document.createElement('div');
    shootingArea.appendChild(shoot);
    shoot.className = "laser";
    shoot.style.left = x_coord+ 'px';
    shoot.style.bottom = 180+ 'px';
    laserUp(shoot);
    if (shoot.style.bottom > 700)  {
        laserUp() = false;
    } 
}  

function laserUp (shoot) {
    const bottom = shoot.style.bottom;
    let bottomNum = parseInt(bottom.substring(0, bottom.length - 2));
    for (let i = 1; i<2; i++) {
        setInterval (() => {
           bottomNum = bottomNum + 5 ;
           shoot.style.bottom = bottomNum + 'px';
        }, 100);
    } 
    
}

function createSprite(element, x, y, w, h) { 
    let result = new Object(); 
    result.element = element; 
    result.x = x; 
    result.y = y; 
    result.w = w; 
    result.h = h; 
    return result;    
} 

function intersects(a, b) { 
    return a.x < b.x + b.w && 
            a.x + a.w > b.x && 
            a.y < b.y + b.h && 
            a.y + a.h > b.y; 
} 

function ensureBounds(sprite, ignoreY) { 
    if (sprite.x < 20) {
      sprite.x = 20; 
    } if (!ignoreY && sprite.y < 20) { 
        sprite.y = 20; 
    } if (sprite.x + sprite.w > 1500) { 
        sprite.x = 1500 - sprite.w; 
    } if (!ignoreY && sprite.y + sprite.h > 620) { 
        sprite.y = 620 - sprite.h; 
    } 
} 

function setPosition(sprite) { 
    let e = document.getElementById(sprite.element); 
    e.style.left = sprite.x + 'px'; 
    e.style.top = sprite.y + 'px'; 
}  

// function getFireableLaser() { 
//     let result = null; 
//     for (let i = 0; i < lasers.length; i++) { 
//         if (lasers[i].y <= -120) { 
//             result = lasers[i]; 
//         } 
//     } return result; 
// } 

// function getIntersectingLaser(enemy) { 
//     let result = null; 
//     for (let i = 0; i < lasers.length; i++) { 
//         if (intersects(lasers[i], enemy)) { 
//             result = lasers[i]; 
//             break; 
//         } 
//     } 
//     return result; 
// } 

// function gameOver() { 
//     element = document.getElementById('gameover'); 
//     element.style.visibility = 'visible'; 
//     addEnemy = false;  //
    
// } 

function checkCollisions() { 
    for (let i = 0; i < enemies.length; i++) { 
    //     let laser = getIntersectingLaser(enemies[i]); 
    //     if (laser) { 
    //         let element = document.getElementById(enemies[i].element); 
    //         element.style.visibility = 'hidden'; 
    //         element.parentNode.removeChild(element); 
    //         enemies.splice(i, 1); 
    //         i--; 
    //         laser.y = -laser.h; score += 100; 
        // } 
     if (enemies[i].y + enemies[i].h >= 610) {  //
            let element = document.getElementById(enemies[i].element); 
            element.style.visibility = 'hidden'; 
            element.parentNode.removeChild(element); 
            enemies.splice(i, 1);
            i--;
            gameOver(); 
        } 
    } 
} 

function showSprites() { //
    for (let i = 0; i < enemies.length; i++) { 
        setPosition(enemies[i]); 
    } 
    let scoreElement = document.getElementById('score'); 
    scoreElement.innerHTML = 'SCORE: ' + score; 
    let lifeSet = document.getElementById('life'); //!!!
    lifeSet.innerHTML = 'REST OF LIVES: ' + life;   //!!!
} 

// function updatePositions() { 
//     for (let i = 0; i < enemies.length; i++) { 
//         enemies[i].y += 4; 
//         enemies[i].x += getRandom(7) - 3; 
//         ensureBounds(enemies[i], true); 
//     } for (let i = 0; i < lasers.length; i++) { 
//         lasers[i].y -= 12; 
//     } 
// } 
function addEnemy() { 
    let interval = 50; 
    if (iterations > 1500) { 
        interval = 5; 
    } else if (iterations > 1000) { 
        interval = 20; 
    } else if (iterations > 500) { 
        interval = 35; 
    } if (getRandom(interval) == 0) { 
        let elementName = 'enemy' + getRandom(10000000); 
        let enemy = createSprite(
            elementName, 
            getRandom(1500), 
            -40, 35, 35
            ); 
        var element = document.createElement('div'); 
        element.id = enemy.element; 
        element.className = 'enemy'; 
        document.children[0].appendChild(element); 
        enemies[enemies.length] = enemy; 
    } 
} 

function getRandom(maxSize) { 
    return parseInt(Math.random() * maxSize); 
} 

function loop() { 
    // if (new Date().getTime() - lastLoopRun > 40) { 
        // updatePositions(); 
        checkCollisions(); 
        addEnemy(); 
        showSprites(); 
        lastLoopRun = new Date().getTime(); 
        iterations++; 
    // } 
    setTimeout('loop();', 2); 
    let element = 'enemy'; //
    if (element.y = 620) {
        return;
    }    
} 


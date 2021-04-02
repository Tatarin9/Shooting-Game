let enemy;
let lastLoopRun = 0; 
let score = 0; 
let iterations = 0; 
let enemies = new Array(); 
let life = 10;  //!!! 

function createSprite(element, x, y, w, h) { // creation of non static elements (enemy, fire)
    let result = new Object(); 
    result.element = element; 
    result.x = x; 
    result.y = y; 
    result.w = w; 
    result.h = h; 
    return result;    
} 

function ensureBounds(sprite, ignoreY) {   // 
    if (sprite.x < 20) {
        sprite.x = 20; 
    } if (!ignoreY && sprite.y < 20) { 
        sprite.y = 20; 
    } if (sprite.x + sprite.w > 1200) {  //!!!
        sprite.x = 1200 - sprite.w;       //!!!
    } if (!ignoreY && sprite.y + sprite.h > 620) { 
        sprite.y = 620 - sprite.h; 
    } 
} 

function setPosition(sprite) { 
    let el = document.getElementById(sprite.element); 
    el.style.left = sprite.x + 'px'; 
    el.style.top = sprite.y + 'px'; 
} 

function gameOver() { 
    element = document.getElementById('gameover'); 
    element.style.visibility = 'visible';     
} 

function checkCollisions() { 
    for (i = 0; i < enemies.length; i++) {
        if (enemies[i].y + enemies[i].h >= 610) { // !!!
            let element = document.getElementById(enemies[i].element); 
            element.style.visibility = 'hidden'; 
            element.parentNode.removeChild(element); 
            enemies.splice(i, 1);
            i--; 
            gameOver();      //!!!
        } //else if (enemies[10]) { 
        //          gameOver();  
        // }      
    } 
} 

function showSprites() { 
    for (i = 0; i < enemies.length; i++) { 
        setPosition(enemies[i]); 
    } 
    let scoreElement = document.getElementById('score'); 
    scoreElement.innerHTML = 'SCORE: ' + score; 

    let lifeSet = document.getElementById('life'); //!!!
    lifeSet.innerHTML = 'REST OF LIVES: ' + life;   //!!!
} 

function updatePositions() { 
    for (i = 0; i < enemies.length; i++) { 
        enemies[i].y += 4; 
        enemies[i].x += getRandom(7) - 3; 
        ensureBounds(enemies[i], true); 
    } 
} 

function addEnemy() { 
    let interval = 50; 
    if (iterations > 1500) { 
        interval = 5; 
    } else if (iterations > 1000) { 
        interval = 20; 
    } else if (iterations > 500) { 
        interval = 35; 
    } 
    
    if (getRandom(interval) == 0) { 
        let elementName = 'enemy' + getRandom(10000000); 
        let enemy = createSprite(
            elementName, 
            getRandom(1600), 
            -40, 35, 35
            ); 
        let element = document.createElement('div'); 
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
    if (new Date().getTime() - lastLoopRun > 40) { 
        updatePositions(); 
        checkCollisions(); 
        addEnemy(); 
        showSprites(); 
        lastLoopRun = new Date().getTime(); 
        iterations++; 
    } 
    setTimeout('loop();', 2); 
    let element = 'enemy';
    if (element.y = 1600) {
        return;
    }
} 

loop();
          


 

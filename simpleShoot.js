// function startGame() {
//     const startBtn = document.getElementById('start-button');  //!!!
//     startBtn.addEventListener('click', addEnemy);
// }

// startGame();

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
}  

function laserUp (shoot) {
    const bottom = shoot.style.bottom;
    let bottomNum = parseInt(bottom.substring(0, bottom.length - 2));
    for (let i = 1; i<2; i++) {
        setInterval (() => {
           bottomNum = bottomNum + 5 ;
           shoot.style.bottom = bottomNum + 'px';
        }, 30);
    }  
    // if (shoot.style.bottom == 700)  {
    //     return; 
    // }   
}

function addEnemy () {
    const playBoard = document.getElementById('play-board');
    for (let i=1; i <= 1; i++) {
        setInterval(() => {
            const enemy = document.createElement('div');
            playBoard.appendChild(enemy);
            enemy.className = 'enemy';
            enemy.style.left = parseInt((Math.random() * 1450)) + 'px';   
            enemy.style.top = 0 + 'px'; 
        }, 2000);
    }
    for (let i=1; i<10; i++) {
        setInterval(() => {
            const enemy = document.createElement('div');
            enemy.style.top = 0 + 'px'; 
            let upNum = enemy.style.top;
            upNum += 5;
            enemy.style.up = upNum + 'px'; 
        }, 500);
    }        
}  
      // for (i=1; i<=1; i++) {
        //     const enemy = document.createElement('div');
        //     let upNum = enemy.style.top;
        //     upNum += 5;
        //     enemy.style.up = upNum + 'px';
        // }

addEnemy();


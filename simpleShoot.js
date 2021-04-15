let life = 10;
let score = 0;
let scoreEl = document.getElementById("score");
scoreEl.innerHTML = "SCORE: " + score;
let lifeEl = document.getElementById("life");
lifeEl.innerHTML = "REST OF LIVES: " + life;
let enemies = [];
let lasers = [];
let enemyTime;
let intersections = []; 

class laserObj {
  constructor(id, x, w, h) {
    this.id = id;
    this.x = x;
    this.w = w = 2;
    this.h = h = 50;
  }
}

class enemyObj {
  constructor(id, x, w, h) {
    this.id = id;
    this.x = x;
    this.w = w = 100;
    this.h = h = 50;
  }
}

function checkCollisions(x, w) {
  intersections = lasers.filter((x, w) => enemies.includes(x, w));
  if (intersections.length > 0) {
    return setScore();
  }
  console.log(intersections);
}

// function intersects(x, w) {
//   lasers.x < enemies.x + enemies.w &&
//   lasers.x + lasers.w > enemies.x &&
//   laser.y < enemy.y + enemy.h &&
//   laser.y + laser.h > enemy.y;
//   }

function setScore() {
  score += 100;
}

function setLifes() {
  life -= 1;
}

function startGame() {
  const startBtn = document.getElementById("start-button");
  startBtn.addEventListener("click", addEnemy);
}

function gameOver() {
  element = document.getElementById("gameover");
  element.style.visibility = "visible";
  clearInterval(enemyTime);
}

function clickHandler() {
  const shootingArea = document.getElementById("shooting-area");
  shootingArea.addEventListener("click", getLaserX_pos);
}

function getLaserX_pos(event) {
  addLaser(event.clientX);
}

// function getEnemyX_pos(event) {
//   addEnemy(event.clientX);
// }

function addLaser(x_coord) {
  const shootingArea = document.getElementById("shooting-area");
  let laser = document.createElement("div");
  shootingArea.appendChild(laser);
  laser.className = "laser";
  laser.style.left = x_coord + "px";
  laser.style.bottom = 180 + "px";
  laserUp(laser);
  laser = new laserObj(Math.random(), x_coord);
  lasers[lasers.length] = laser;
  checkCollisions();

  // lasers.push(laser);
}

function laserUp(laser) {
  const bottom = laser.style.bottom;
  let bottomNum = parseInt(bottom.substring(0, bottom.length - 2));
  let laserTime = setInterval(() => {
    if (bottomNum < 720) {
      bottomNum = bottomNum + 5;
      laser.style.bottom = bottomNum + "px";
    } else {
      laser.remove(laser);
    }
  }, 30);
  // intersects();
  // findIntersections();
  // console.log(intersections);
  checkCollisions();
}

function addEnemy(enemy) {
  clickHandler();
  // getEnemyX_pos();
  enemyTime = setInterval(() => {
    const playBoard = document.getElementById("play-board");
    let enemy = document.createElement("div");
    playBoard.appendChild(enemy);
    enemy.className = "enemy";
    let enemyLeft = (enemy.style.left = parseInt(Math.random() * 1450) + "px");
    enemy.style.top = 0 + "px";
    enemyDown(enemy);
    enemy = new enemyObj(
      Math.random(),
      Number(enemyLeft.substring(0, enemyLeft.length - 2))
    );
    enemies.push(new Object(enemy));
  }, 2000);
}

function enemyDown(enemy) {
  const roof = enemy.style.top;
  let roofNum = parseInt(roof.substring(0, roof.length - 2));
  setInterval(() => {
    if (roofNum < 245) {
      roofNum = roofNum + 2;
      enemy.style.top = roofNum + "px";
    } else {
      enemy.remove(enemy);
      setLifes();
      gameOver();
    }
  }, 100);
}

startGame();

console.log(lasers);
console.log(enemies);

// function findIntersections(lasers, enemies) {
//   const set = new Set(lasers);
//   const intersection = new Set(
//     enemies.filter((x_coord) => set.has(x_coord))
//   );
//   return [...intersection];
// }

// function findIntersections (lasers, enemies) {
//   return lasers.filter(
//     function(x_coord) {
//       return enemies.indexOf(x_coord) !== -1;
//     }
//   );
// }

// // function checkIntersects (lasers, enemies) {
// //   let intersection = true;
// //   for (let x in lasers) {
// //     if(lasers[x] !== enemies[x]) {
// //       checkIntersects = false;
// //       break;
// //     }
// //     return checkIntersects;
// //   }




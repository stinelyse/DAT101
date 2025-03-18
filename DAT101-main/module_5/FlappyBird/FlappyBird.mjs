"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import THero from "./hero.mjs";
import TObstacle from "./obstacle.mjs";
import { TBait } from "./bait.mjs";
import { TMenu } from "./menu.mjs";

//--------------- Objects and Variables ----------------------------------//
const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

// prettier-ignore
//Et objekt som inneholder informasjon om sprites, som posisjon, bredde, høyde og antall.
export const SpriteInfoList = {
  hero1:        { x:    0, y: 545, width:   34, height:  24, count:  4 },
  hero2:        { x:    0, y: 569, width:   34, height:  24, count:  4 },
  hero3:        { x:    0, y: 593, width:   34, height:  24, count:  4 },
  obstacle:     { x:    0, y:   0, width:   52, height: 320, count:  4 },
  background:   { x:  246, y:   0, width:  576, height: 512, count:  2 },
  flappyBird:   { x:    0, y: 330, width:  178, height:  50, count:  1 },
  ground:       { x:  246, y: 512, width: 1152, height: 114, count:  1 },
  numberSmall:  { x:  681, y: 635, width:   14, height:  20, count: 10 },
  numberBig:    { x:  422, y: 635, width:   24, height:  36, count: 10 },
  buttonPlay:   { x: 1183, y: 635, width:  104, height:  58, count:  1 },
  gameOver:     { x:    0, y: 384, width:  226, height: 114, count:  1 },
  infoText:     { x:    0, y: 630, width:  200, height:  55, count:  2 },
  food:         { x:    0, y: 696, width:   70, height:  65, count: 34 },
  medal:        { x:  985, y: 635, width:   44, height:  44, count:  4 },
};

export const EGameStatus = { idle: 0, getReady: 1, playing: 2, gameOver: 3 };

export const GameProps = {
  soundMuted: false,
  dayTime: true,
  speed: 1,
  status: EGameStatus.idle, //For testing, normally EGameStatus.idle
  background: null,
  ground: null,
  hero: null,
  obstacles: [],
  baits: [],
  menu: null,
  score: 0,
  bestScore: 0,
  sounds: {countDown: null, food: null, gameOver: null, dead: null, running: null},
};

//--------------- Functions ----------------------------------------------//

//A function that plays a sound if the sound is not muted.
//Kontrollerer lyden i spillet, hvis lyden er skrudd av, stoppes lyden.
function playSound(aSound) {
  if (!GameProps.soundMuted) {
    aSound.play();
  } else {
    aSound.pause();
  }
}

//A function that loads the game.
//Klargjør alle elementer før spillet starter. 
function loadGame() {
  console.log("Game ready to load");
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height;

  let pos = new lib2d.TPosition(0, 0);
  GameProps.background = new libSprite.TSprite(spcvs, SpriteInfoList.background, pos);
  pos.y = cvs.height - SpriteInfoList.ground.height;
  GameProps.ground = new libSprite.TSprite(spcvs, SpriteInfoList.ground, pos);
  pos.x = 100;
  pos.y = 100;
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, pos);

  GameProps.menu = new TMenu(spcvs);

  //Load sounds
  GameProps.sounds.running = new libSound.TSoundFile("./Media/running.mp3");
  GameProps.sounds.countDown = new libSound.TSoundFile("./Media/countDown.mp3");
  GameProps.sounds.food = new libSound.TSoundFile("./Media/food.mp3");
  GameProps.sounds.flap = new libSound.TSoundFile("./Media/flap.mp3");
  GameProps.sounds.heroIsDead = new libSound.TSoundFile("./Media/heroIsDead.mp3");
  GameProps.sounds.gameOver = new libSound.TSoundFile("./Media/gameOver.mp3");



  requestAnimationFrame(drawGame); 
  setInterval(animateGame, 10);
}// end of loadGame




//A function that draws the game.
//Rydder canvasen før hver ramme, tegner bakgrunnen, maten, hindringene, bakken, helten og menyen.
function drawGame() {
  spcvs.clearCanvas();
  GameProps.background.draw();
  drawBait();
  drawObstacles();
  GameProps.ground.draw();
  GameProps.hero.draw();
  GameProps.menu.draw();
  requestAnimationFrame(drawGame);
}

//A function that draws the obstacles.
//Lagret i GameProps.obstacles.
function drawObstacles() {
  for (let i = 0; i < GameProps.obstacles.length; i++) {
    const obstacle = GameProps.obstacles[i];
    obstacle.draw();
  }
}

//A function that draws the bait.
//Lagret i GameProps.baits.
function drawBait() {
  for (let i = 0; i < GameProps.baits.length; i++) {
    const bait = GameProps.baits[i];
    bait.draw();
  }
}

//A function that animates the game.
//Spillet er i fire forskjellige tilstander: idle, getReady, playing og gameOver.
//Hvis helten er død, stoppes animasjonen.
//Hvis helten er i live, flyttes bakgrunnen, oppdateres helten og hindringene.
//Hvis en hindring er passert, økes poengsummen.
//Hvis en hindring er utenfor skjermen, fjernes den.
//Hvis en matbit er spist, økes poengsummen.
//Hvis en matbit er utenfor skjermen, fjernes den.
//Hvis spillet er over, stoppes animasjonen.
//Hvis spillet er i idle, oppdateres helten. (Idle: spillet står stille og venter på at spilleren skal starte)

let heroIsDeadSound = new Audio("./media/heroIsDead.mp3"); //laster ned lyd på forhånd 
let foodSound = new Audio("./media/food.mp3");  

function animateGame() {
  switch (GameProps.status) {  
    case EGameStatus.playing: 
      if (GameProps.hero.isDead) { //If the hero is dead, stop the animation
         heroIsDeadSound.play();
        GameProps.hero.animateSpeed = 0; //Stop the animation of the hero
        GameProps.hero.update(); //Update the hero
        return; 
      }

      
      GameProps.ground.translate(-GameProps.speed, 0); //Move the ground to the left(noe som gir enn illusjon av at helten beveger seg fremover)
      if (GameProps.ground.posX <= -SpriteInfoList.background.width) {
        GameProps.ground.posX = 0;
      }
      GameProps.hero.update(); //Update the hero
      let delObstacleIndex = -1;
      
      for (let i = 0; i < GameProps.obstacles.length; i++) { //Loop through all obstacles
        const obstacle = GameProps.obstacles[i];
        obstacle.update();
        if(obstacle.right < GameProps.hero.left && !obstacle.hasPassed) {
          //Congratulations, you have passed the obstacle
          GameProps.menu.incScore(20); //Increase the score by 20 hvis hindringen er passert
          console.log("Score: " + GameProps.score);
          obstacle.hasPassed = true;
        }
        if (obstacle.posX < -100) {
          delObstacleIndex = i;
        }
      }
      if (delObstacleIndex >= 0) {
        GameProps.obstacles.splice(delObstacleIndex, 1);
      }
    case EGameStatus.gameOver:
      let delBaitIndex = -1; //If the bait is eaten, remove it
      const posHero = GameProps.hero.getCenter();
      for (let i = 0; i < GameProps.baits.length; i++) {
        const bait = GameProps.baits[i];
        bait.update();
        const posBait = bait.getCenter();
        const dist = posHero.distanceToPoint(posBait);
        if (dist < 15) {
          delBaitIndex = i;
        }
      }
      if (delBaitIndex >= 0) {
        GameProps.baits.splice(delBaitIndex, 1);
        GameProps.menu.incScore(10);
         foodSound.play();
      }
      break; //Break betyr at vi avslutter switchen. Switch er en måte å sjekke hvilken tilstand spillet er i.
      case EGameStatus.idle: //If the game is idle, update the hero
        GameProps.hero.updateIdle();
        break;
  }
}
//A function that spawns an obstacle.
//Spawns a new obstacle in 2-7 seconds
function spawnObstacle() {
  const obstacle = new TObstacle(spcvs, SpriteInfoList.obstacle);
  GameProps.obstacles.push(obstacle);
  //Spawn a new obstacle in 2-7 seconds
  if (GameProps.status === EGameStatus.playing) {
    const seconds = Math.ceil(Math.random() * 5) + 2;
    setTimeout(spawnObstacle, seconds * 1000);
  }
}

//A function that spawns a bait.
//Spawns a new bait in 0.5-1.5 seconds
function spawnBait() {
  const pos = new lib2d.TPosition(SpriteInfoList.background.width, 100);
  const bait = new TBait(spcvs, SpriteInfoList.food, pos);
  GameProps.baits.push(bait);
  //Generate a new bait in 0.5-1.5 seconds
  if (GameProps.status === EGameStatus.playing) {
    const sec = Math.ceil(Math.random() * 5) / 10 + 0.5;
    setTimeout(spawnBait, sec * 1000);
  }
}

//A function that starts the game.
//Sets the status to playing, creates a new hero, resets the obstacles and baits, and plays the running sound.
//Vi bruker export for å gjøre funksjonen tilgjengelig for andre filer.
export function startGame() {
  GameProps.status = EGameStatus.playing;
  //The hero is dead, so we must create a new hero
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, new lib2d.TPosition(100, 100));
  //We must reset the obstacles and baits
  GameProps.obstacles = [];
  GameProps.baits = [];
  GameProps.menu.reset();
  spawnObstacle();
  spawnBait();
  //Play the running sound
  GameProps.sounds.running.play();
}

//--------------- Event Handlers -----------------------------------------//

//A function that sets the sound on or off.
//If the sound is muted, the sound is turned off.
//If the sound is on, the sound is turned on.
function setSoundOnOff() {
  if (chkMuteSound.checked) {
    GameProps.soundMuted = true;
    console.log("Sound muted");
  } else {
    GameProps.soundMuted = false;
    console.log("Sound on");
  }
} // end of setSoundOnOff

//Set day or night
//If day is checked, the game is set to day time.
//If night is checked, the game is set to night time.

function setDayNight() {
  if (rbDayNight[0].checked) {
    GameProps.dayTime = true;
    GameProps.background.index = 0; // bakgrunnen til dagmodus
    GameProps.obstacles.index = 0; // hindringene til dagmodus
    console.log("Day time");
  } else {
    GameProps.dayTime = false;
    GameProps.background.index = 1; // bakgrunnen til nattmodus
    GameProps.obstacles.index = 1; // hindringene til nattmodus
    }
    console.log("Night time");
  }
  // end of setDayNight


//A function that handles the key down event.
//If the space key is pressed, the hero flaps.
function onKeyDown(aEvent) {
  switch (aEvent.code) {
    case "Space":
      if (!GameProps.hero.isDead) {
        GameProps.hero.flap();
        const flapSound = new Audio("./media/flap.mp3"); //spiller av lyd
         flapSound.play();
      }
      break;
  }
}

//--------------- Main Code ----------------------------------------------//
//Add event listeners
chkMuteSound.addEventListener("change", setSoundOnOff);
rbDayNight[0].addEventListener("change", setDayNight);
rbDayNight[1].addEventListener("change", setDayNight);

// Load the sprite sheet
spcvs.loadSpriteSheet("./Media/FlappyBirdSprites.png", loadGame);
document.addEventListener("keydown", onKeyDown);
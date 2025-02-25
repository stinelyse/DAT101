"use strict";
import libSprite from "../../common/libs/libSprite.mjs";
import lib2d from "../../common/libs/lib2d.mjs";
import { GameProps } from "./FlappyBird.mjs";

//TObstacle er en klasse for å håndtere hindringer i spillet, arver fra TSprite.
//Klassen har egenskapene upper, lower og spi.
//Klassen har også konstruktøren som tar inn et canvas element og sprite informasjon.
//Klassen har også metodene draw og update. 
//Klassen har også egenskapene right, left og posX.

class TObstacle {
  #upper; //Øvre del av hindringen
  #lower; //Nedre del av hindringen
  #spi; //Informasjon om hindringen
  constructor(aSpriteCanvas, aSpriteInfo) { //Konstruktør som tar inn et canvas element og sprite informasjon
    this.#spi = aSpriteInfo;
    const minTop = -320 + 25; 
    let top = Math.floor(Math.random() * minTop);
    let pos = new lib2d.TPosition(650, top);
    this.#upper = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#upper.index = 3;
    const groundY = GameProps.ground.posY;
    top += this.#spi.height + 150;
    const gap = top - groundY - 25;

    top = Math.floor(Math.random() * gap) + groundY - 25;
    pos.y = top;
    this.#lower = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#lower.index = 2;
    this.hasPassed = false;
  }

  //draw er en metode for å tegne hindringen på canvasen.
  draw(){
    this.#upper.draw();
    this.#lower.draw();
  }

  //update er en metode for å oppdatere hindringen.
  update(){
    this.#upper.translate(-1, 0);
    this.#lower.translate(-1, 0);
    const hasCollided = 
    GameProps.hero.hasCollided(this.#upper) || 
    GameProps.hero.hasCollided(this.#lower);

    if(hasCollided){
      GameProps.hero.flap();
      GameProps.hero.isDead = true;
    }
  }

  //get metoder for å hente egenskapene til hindringen
  get right(){
    return this.#upper.right;
  }

  get left(){
    return this.#upper.left;
  }

  get posX(){
    return this.#upper.posX;
  }
}

//Eksporterer TObstacle
export default TObstacle;
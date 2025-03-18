"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { GameProps, EGameStatus } from "./FlappyBird.mjs";

//THero er en klasse for å håndtere helten i spillet, arver fra TSprite.
//Klassen har egenskapene gravity, velocity, sineWave og spi.
//Klassen har også konstruktøren som tar inn et canvas element, sprite informasjon og en posisjon.
//Klassen har også metodene draw, update, flap og updateIdle.
//Klassen har også egenskapene animateSpeed, isDead og rotation.
class THero extends libSprite.TSprite {
  //Bruker private for å hindre at egenskapene blir endret utenfor klassen. 
  #spi; //informajon om fuglens sprite
  #gravity = 9.81 / 100; //simulerer tyngdekraften
  #velocity = 0; //Bestemmer om fuglen beveger seg opp eller ned
  #sineWave; //Brukes til idle-animasjonen når spillet står stille
  constructor(aSpriteCanvas, aSpriteInfo, aPosition) {
    super(aSpriteCanvas, aSpriteInfo, aPosition);
    this.#spi = aSpriteInfo;
    this.animateSpeed = 10;
    this.isDead = false;
    this.rotation = 0;
    this.#sineWave = new lib2d.TSineWave(1.5, 2);
  }

  //draw er en metode for å tegne fuglen på canvasen.
  draw() {
    super.draw();
  }

  //update er en metode for å oppdatere fuglen.
  update() {
    const groundY = GameProps.ground.posY;
    const bottomY = this.posY + this.#spi.height;
    if (bottomY < groundY) {
      if (this.posY < 0) {
        this.posY = 0;
        this.#velocity = 0;
      }
      this.translate(0, this.#velocity);
      this.rotation = this.#velocity* 10;
      this.#velocity += this.#gravity;
    } else {
      this.posY = groundY - this.#spi.height;
      GameProps.status = EGameStatus.gameOver;
      this.animateSpeed = 0;
      const gameOverSound = new Audio("./media/gameOver.mp3"); //spiller av lyd
      gameOverSound.play();
      GameProps.sounds.running.stop();
    }
  }

  //flap er en metode for å få fuglen til å fly oppover.
  flap() {
    this.#velocity = -3; //-3 gir en oppoverbevegelse
  }

  //updateIdle er en metode for å oppdatere idle-animasjon
  updateIdle(){
    this.translate(0, this.#sineWave.value);
  }

}

export default THero; //Eksporterer THero
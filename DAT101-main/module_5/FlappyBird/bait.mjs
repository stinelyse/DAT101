"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { GameProps, EGameStatus } from "./FlappyBird.mjs";

//TBait er en klasse for å håndtere maten i spillet, arver fra TSprite.
//Klassen har egenskapene speed og sineWave.
//Klassen har også konstruktøren som tar inn et canvas element, sprite informasjon og en posisjon.
//Klassen har også metoden update.
//Klassen har også egenskapen animateSpeed.
export class TBait extends libSprite.TSprite {
  #speed; //Farten til maten
  #sineWave; //Brukes til å lage en bølgebevegelse
  constructor(aSpriteCanvas, aSpriteInfo, aPosition) {
    super(aSpriteCanvas, aSpriteInfo, aPosition);
    this.animateSpeed = 35;
    //Genere tilfeldig hastighet mellom 0.5 og 1.5 med step på 0.1
    this.#speed = Math.ceil(Math.random() * 10) / 10 + 0.5;
    //Generer en tilfeldig amplitude mellom 1 og 3
    const amplitude = Math.ceil(Math.random() * 3);
    this.#sineWave = new lib2d.TSineWave(amplitude, 1);
    this.posY = this.#sineWave.value;
  }

  //update er en metode for å oppdatere maten.
  update() {
    if(GameProps.status === EGameStatus.playing){
      this.translate(-this.#speed, this.#sineWave.value);
    }else{
      this.translate(this.#speed / 2, this.#sineWave.value);
    }
  }
}

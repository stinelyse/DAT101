"use strict";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import MastermindBoard from "./MastermindBoard.mjs";
import { GameProps } from "./Mastermind.mjs";

const Positions = MastermindBoard.ColorPicker;

export class TColorPicker extends libSprite.TSpriteDraggable {
  #spcvs;
  #spi;
  #color;
  #snapPos;
  #hasMoved;
  constructor(spcvs, spriteInfo, color, index){ 
    super(spcvs, spriteInfo,Positions[color]); //super er en referanse til superklassen
    this.index = index; 
    this.snapTo = GameProps.snapTo;
    this.#spcvs = spcvs;
    this.#spi = spriteInfo;
    this.#color = color;
    this.#snapPos = null;
    this.#hasMoved = false;
  }

  onCanDrop(){ 
    return false;
  }

  clone(){ //metode som lager en kopi av fargen
    return new TColorPicker( //returnerer en ny instans av TColorPicker
      this.#spcvs, 
      this.#spi,
      this.#color,
      this.index
    )
  }

  onDrop(aDropPosition){ //metode som kjøres når en farge blir sluppet
    GameProps.ColorPickers.push(this.clone()); //legger til en kopi av fargen i ColorPickers
   const index = GameProps.snapTo.positions.indexOf(aDropPosition); //finner index til posisjonen fargen ble sluppet på
   this.#snapPos = GameProps.snapTo.positions.splice(index, 1)[0]; //fjerner posisjonen fra snapTo.positions og lagrer den i this.#snapPos
   this.#hasMoved = true;
  }

  onMouseDown(){ //metode som kjøres når musen klikkes på en farge
    super.onMouseDown(); //kaller metoden onMouseDown i superklassen
    const index = GameProps.ColorPickers.indexOf(this); //finner index til fargen som er klikket på
    GameProps.ColorPickers.splice(index, 1); //fjerner fargen fra ColorPickers
    GameProps.ColorPickers.push(this); //legger fargen tilbake i ColorPickers
    if(this.#snapPos !== null){ //hvis this.#snapPos ikke er null
      GameProps.snapTo.positions.push(this.#snapPos); //legger til this.#snapPos i snapTo.positions
      this.#snapPos = null; //setter this.#snapPos til null
    }
  }

  onCancelDrop(){ //metode som kjøres når en farge ikke blir sluppet på en gyldig posisjon
    if(this.#hasMoved){ 
      const index= GameProps.ColorPickers.indexOf(this); //finner index til fargen
      GameProps.ColorPickers.splice(index, 1); //fjerner fargen fra ColorPickers
      this.spcvs.removeSpriteButton(this); 
      }
    }
    

} 
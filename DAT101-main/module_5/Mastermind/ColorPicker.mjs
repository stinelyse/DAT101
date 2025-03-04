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
  #snapIndex;
  #hasMoved;
  constructor(spcvs, spriteInfo, color, index){ 
    super(spcvs, spriteInfo,Positions[color]); //super er en referanse til superklassen
    this.index = index; 
    this.snapTo = GameProps.snapTo;
    this.#spcvs = spcvs;
    this.#spi = spriteInfo;
    this.#color = color;
    this.#snapPos = null;
    this.#snapIndex = -1;
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
   this.#snapIndex = GameProps.snapTo.positions.indexOf(aDropPosition); //finner index til posisjonen fargen ble sluppet på
   this.#snapPos = new lib2D.TPoint();
   this.#snapPos.x = GameProps.snapTo.positions[this.#snapIndex].x;
   this.#snapPos.y = GameProps.snapTo.positions[this.#snapIndex].y;
   GameProps.snapTo.positions[this.#snapIndex] = null;
   this.#hasMoved = true;
   GameProps.playerAnswers[this.#snapIndex] = this;
   console.log("Drop color on snap index", this.#snapIndex);
  }

  onMouseDown(){ //metode som kjøres når musen klikkes på en farge
    super.onMouseDown(); //kaller metoden onMouseDown i superklassen
    const index = GameProps.ColorPickers.indexOf(this); //finner index til fargen som er klikket på
    GameProps.ColorPickers.splice(index, 1); //fjerner fargen fra ColorPickers
    GameProps.ColorPickers.push(this); //legger fargen tilbake i ColorPickers
    if(this.#snapPos !== null){ //hvis this.#snapPos ikke er null
      GameProps.snapTo.positions[this.#snapIndex] = this.#snapPos;
      this.#snapPos = null; //setter this.#snapPos til null
      GameProps.playerAnswers[this.#snapIndex] = null;
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
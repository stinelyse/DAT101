"use strict";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { GameProps, SpriteInfoList } from "./Mastermind.mjs";
import MastermindBoard from "./MastermindBoard.mjs";

export class TMenu {
    #ButtonNewGame; 
    #ButtonCheckAnswer;
    #ButtonCheat;
    #PanelHideAnswer;
    constructor(aSpriteCanvas) {
        this.#ButtonNewGame = 
        new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.ButtonNewGame, MastermindBoard.ButtonNewGame);
  }

  draw(){
    this.#ButtonNewGame.draw();
  }

}

  
     





//GameProps.ButtonNewGame = new libSprite.TSpriteButton(spcvs, SpriteInfoList.ButtonNewGame, new lib2D.TPoint(275, 5));
//GameProps.ButtonCheckAnswer = new libSprite.TSpriteButton(spcvs, SpriteInfoList.ButtonCheckAnswer, new lib2D.TPoint(275, 53));
//GameProps.ButtonCheat = new libSprite.TSpriteButton(spcvs, SpriteInfoList.ButtonCheat, new lib2D.TPoint(5, 45));
//GameProps.PanelHideAnswer = new libSprite.TSpriteButton(spcvs, SpriteInfoList.PanelHideAnswer, new lib2D.TPoint(84, 45));



//GameProps.ButtonNewGame.draw();
//GameProps.ButtonCheckAnswer.draw(); 
//GameProps.ButtonCheat.draw();
//GameProps.PanelHideAnswer.draw();


//ButtonNewGame: null,
//ButtonCheckAnswer: null,
//ButtonCheat: null,
//PanelHideAnswer: null,
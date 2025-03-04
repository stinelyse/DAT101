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
        this.#ButtonCheckAnswer=
        new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.ButtonCheckAnswer, MastermindBoard.ButtonCheckAnswer);
        this.#ButtonCheat=
        new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.ButtonCheat, MastermindBoard.ButtonCheat);
        this.#PanelHideAnswer=
        new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.PanelHideAnswer, MastermindBoard.PanelHideAnswer);
        
        this.#ButtonCheat.onClick = this.onHintClick;
        this.#ButtonCheckAnswer.onClick = this.onCheckAnswerClick;
  }

  draw(){
    this.#ButtonNewGame.draw();
    this.#ButtonCheckAnswer.draw();
    this.#ButtonCheat.draw();
    this.#PanelHideAnswer.draw();
  }

  onHintClick = () =>{
    this.#PanelHideAnswer.visible = !this.#PanelHideAnswer.visible;
  }

  onCheckAnswerClick = () =>{
     const answerObject = { color : 0, pos: -1};
     const computerAnswerList= [];
     for(let i = 0; i < 4; i++){
        const obj = Object.create(answerObject);
        const computerAnswer = GameProps.computerAnswers[i];
        obj.color = computerAnswer.index;
        obj.pos = i;
        computerAnswerList.push(obj);
     }

     const playerAnswerList = [];
     for(let i = 0; i < 4; i++){
        const obj = Object.create(answerObject);
        const playerAnswer = GameProps.playerAnswers[i];
        obj.color = playerAnswer.index;
        obj.pos = i;
        playerAnswerList.push(obj);
     }

     console.log("Computer answer", computerAnswerList);
     console.log("Player answer", playerAnswerList);

     for(let i = 0; i < 4; i++){
        const computerAnswer = computerAnswerList[i];
        const playerAnswer = playerAnswerList[i];
        if(computerAnswer.color === playerAnswer.color){
            console.log("Riktig farge på riktig plass");
            console.log("index", i);
        }
     }
  }
}

  
     



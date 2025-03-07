"use strict";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { GameProps, SpriteInfoList, moveRoundIndicator} from "./Mastermind.mjs";
import MastermindBoard from "./MastermindBoard.mjs";

export class TMenu {
    #ButtonNewGame; 
    #ButtonCheckAnswer;
    #ButtonCheat;
    #PanelHideAnswer;
    #ColorHints;
    #spcvs;
    #roundNumber;
    constructor(aSpriteCanvas) {
        this.#spcvs = aSpriteCanvas;
        this.#roundNumber = 1;
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
        this.#ColorHints = [];
  } //end of constructor

  draw(){
    this.#ButtonNewGame.draw();
    this.#ButtonCheckAnswer.draw();
    this.#ButtonCheat.draw();
    this.#PanelHideAnswer.draw();
    for(let i = 0; i < this.#ColorHints.length; i++){
      const colorHint = this.#ColorHints[i];
   colorHint.draw(); 
    }
  }

  onHintClick = () =>{
    this.#PanelHideAnswer.visible = !this.#PanelHideAnswer.visible;
  }

  onCheckAnswerClick = () =>{
     const answerObject = { color : 0, pos: -1, checkThis: true};
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
      //Kontrollere at brukeren har valgt 4 farger
      if(GameProps.playerAnswers[i] === null){
         return; //Avslutt funksjonen, brukeren mangler farger
      }
        const obj = Object.create(answerObject);
        const playerAnswer = GameProps.playerAnswers[i];
        obj.color = playerAnswer.index;
        obj.pos = i;
        playerAnswerList.push(obj);
     }

     console.log("Computer answer", computerAnswerList);
     console.log("Player answer", playerAnswerList);

    let answerColorHintIndex = 0;
     for(let i = 0; i < 4; i++){
        const computerAnswer = computerAnswerList[i];
        const playerAnswer = playerAnswerList[i];
        if(computerAnswer.color === playerAnswer.color){
            console.log("Riktig farge på riktig plass");
            console.log("index", i);
            answerColorHintIndex = this.#createColorHint(answerColorHintIndex, 1);
            computerAnswer.checkThis = playerAnswer.checkThis = false;
        }
     }
     //Sjekke om vi har valgt riktig farge på feil plass
     //ytre for løkke sjekker spillerens svar
     for(let i = 0; i < 4; i++){
      const playerAnswer = playerAnswerList[i];
      //Hvis denne fargen skal sjekkes , sjekk mot alle computerens svar
      if(playerAnswer.checkThis) {
         for(let j = 0; j < 4; j++){
            const computerAnswer = computerAnswerList[j];
            //Sjekk om denne fargen skal sjekkes og at den ikke er på samme plass
            if(computerAnswer.checkThis && (playerAnswer.pos !== computerAnswer.pos)){
               if(playerAnswer.color === computerAnswer.color){
                  console.log(`Rett farge på feil plass - ${playerAnswer.pos + 1}, ${computerAnswer.pos +1}`);
                  answerColorHintIndex = this.#createColorHint(answerColorHintIndex, 0);
                  //Vi må ikke sjekke disse fargene igjen
                  computerAnswer.checkThis = playerAnswer.checkThis = false;
               }
            }
         }
      }
     }
     this.#setNextRound();
  } //end of onCheckAnswerClick

  //Privat metode, den bruker interne variabler og kan ikke kalles utenfra
     #createColorHint(posIndex, colorIndex){
      const pos = GameProps.answerHintRow[posIndex++];
      const colorHintSPI = SpriteInfoList.ColorHint;
      const colorHint = new libSprite.TSprite(this.#spcvs, colorHintSPI, pos);
      colorHint.index = colorIndex;
      this.#ColorHints.push(colorHint);
      return posIndex; //Vi må returnere den nye indeksen til posisjonen
  } // end of #createColorHint

  #setNextRound(){
   this.#roundNumber++;
   const rowText = `Row${this.#roundNumber}`;
   GameProps.snapTo.positions = MastermindBoard.ColorAnswer[rowText];
   GameProps.answerHintRow = MastermindBoard.AnswerHint[rowText];
   moveRoundIndicator();
   for(let i = 0; i < 4; i++){
      GameProps.playerAnswers[i].disable = true;
      GameProps.playerAnswers[i] = null;
   }
  }

}// end of class TMenu

  
     



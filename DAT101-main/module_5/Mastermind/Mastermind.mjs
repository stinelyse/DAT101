"use strict";

//--------------------------------------------------------------------------------------------------------------------
//------ Imports
//--------------------------------------------------------------------------------------------------------------------
import lib2D from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { TColorPicker } from "./ColorPicker.mjs";
import MastermindBoard from "./MastermindBoard.mjs";

//--------------------------------------------------------------------------------------------------------------------
//------ Variables, Constants and Objects
//--------------------------------------------------------------------------------------------------------------------

// prettier-ignore
export const SpriteInfoList = {
  Board:              { x: 320, y:   0, width: 441, height: 640, count: 1 },
  ButtonNewGame:      { x:   0, y:  45, width: 160, height:  45, count: 2 },
  ButtonCheckAnswer:  { x:   0, y:   0, width: 160, height:  45, count: 2 },
  ButtonCheat:        { x:   0, y: 139, width:  75, height:  49, count: 2 },
  PanelHideAnswer:    { x:   0, y:  90, width: 186, height:  49, count: 1 },
  ColorPicker:        { x:   0, y: 200, width:  34, height:  34, count: 8 },
  ColorHint:          { x:   0, y: 250, width:  19, height:  18, count: 2 },
};

const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

//Add all you game objects here
export const GameProps = {
 Board: null, //tegner brettet
 ButtonNewGame: null,
 ButtonCheckAnswer: null,
 ButtonCheat: null,
 PanelHideAnswer: null,
 ColorPickers: null,
 snapTo: {
  positions: MastermindBoard.ColorAnswer.Row1,
  distance: 20
 },
 ColorHint: null,
}

//--------------------------------------------------------------------------------------------------------------------
//------ Functions
//--------------------------------------------------------------------------------------------------------------------

function newGame() {
  
}

function drawGame(){
  spcvs.clearCanvas();
  //Draw all game objects here, remember to think about the draw order (layers in PhotoShop for example!)
  GameProps.Board.draw(); //tegner brettet
  GameProps.ButtonNewGame.draw();
  GameProps.ButtonCheckAnswer.draw();
  GameProps.ButtonCheat.draw();
  GameProps.PanelHideAnswer.draw();
  GameProps.ColorHint.draw();

  //tegner fargene på colorpicker, bruker for-løkke for å tegne alle fargene fordi det er flere farger og det er lettere å bruke en for-løkke istedenfor å skrive hver enkelt farge.
  for (let i = 0; i < GameProps.ColorPickers.length; i++) { 
    const ColorPicker = GameProps.ColorPickers[i];
    ColorPicker.draw();
  }
  
  requestAnimationFrame(drawGame);
}

//--------------------------------------------------------------------------------------------------------------------
//------ Event Handlers
//--------------------------------------------------------------------------------------------------------------------

//loadGame runs once when the sprite sheet is loaded
function loadGame() {
  //Set canvas with and height to match the sprite sheet
  cvs.width = SpriteInfoList.Board.width;
  cvs.height = SpriteInfoList.Board.height;
  spcvs.updateBoundsRect();
  const pos = new lib2D.TPoint(0, 0);
  GameProps.Board = new libSprite.TSprite(spcvs, SpriteInfoList.Board, new lib2D.TPoint(0, 0)); //tegner brettet //Tspritebutton endrer musen til en hånd som peker
  GameProps.ButtonNewGame = new libSprite.TSpriteButton(spcvs, SpriteInfoList.ButtonNewGame, new lib2D.TPoint(275, 5));
  GameProps.ButtonCheckAnswer = new libSprite.TSpriteButton(spcvs, SpriteInfoList.ButtonCheckAnswer, new lib2D.TPoint(275, 53));
  GameProps.ButtonCheat = new libSprite.TSpriteButton(spcvs, SpriteInfoList.ButtonCheat, new lib2D.TPoint(5, 45));
  GameProps.PanelHideAnswer = new libSprite.TSpriteButton(spcvs, SpriteInfoList.PanelHideAnswer, new lib2D.TPoint(84, 45));
  GameProps.ColorHint = new libSprite.TSprite(spcvs, SpriteInfoList.ColorHint, new lib2D.TPoint(0, 0));

GameProps.ColorPickers = [ //importerer alle fargene på colorpicker
  new TColorPicker(spcvs, SpriteInfoList.ColorPicker, "Black", 0),
  new TColorPicker(spcvs, SpriteInfoList.ColorPicker, "Blue", 1),
  new TColorPicker(spcvs, SpriteInfoList.ColorPicker, "Brown", 2),
  new TColorPicker(spcvs, SpriteInfoList.ColorPicker, "Green", 3),
  new TColorPicker(spcvs, SpriteInfoList.ColorPicker, "Orange", 4),
  new TColorPicker(spcvs, SpriteInfoList.ColorPicker, "Red", 5),
  new TColorPicker(spcvs, SpriteInfoList.ColorPicker, "White", 6), 
  new TColorPicker(spcvs, SpriteInfoList.ColorPicker, "Yellow", 7),
 ];
  newGame();
  requestAnimationFrame(drawGame); // Start the animation loop
}


//--------------------------------------------------------------------------------------------------------------------
//------ Main Code
//--------------------------------------------------------------------------------------------------------------------


spcvs.loadSpriteSheet("./Media/SpriteSheet.png", loadGame);
window.addEventListener("resize", () => spcvs.updateBoundsRect());
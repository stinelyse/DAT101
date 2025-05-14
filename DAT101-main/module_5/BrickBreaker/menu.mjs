"use strict";

import libSprite from "../../common/libs/libSprite_v2.mjs";
import { SpriteInfoList } from "./BrickBreaker.mjs";

export class TMenu {
  constructor(spcvs) {
    this.spcvs = spcvs;
    this.sprite = new libSprite.TSprite(spcvs, SpriteInfoList.Menu);
    this.startBtn = new libSprite.TSprite(spcvs, SpriteInfoList.StartBtn);
    this.visible = true;
  }

  draw() {
    if (!this.visible) return;
    // Tegn menyen midt på skjermen
    const x = (this.spcvs.canvas.width - this.sprite.width) / 2;
    const y = (this.spcvs.canvas.height - this.sprite.height) / 2;
    this.sprite.draw(x, y);
    this.startBtn.draw(x + 100, y + 100);
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }
}

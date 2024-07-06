import * as PIXI from "pixi.js";

//Creating Reel Background Image
export class ReelBg {

    public baseReel: PIXI.Sprite;

    constructor(texture: any, x: number, y: number) {
        this.baseReel = new PIXI.Sprite(texture);
        this.baseReel.anchor.set(0.5);
        this.baseReel.scale.set(0.7, 0.7);
        this.baseReel.x = x;
        this.baseReel.y = y;
        this.tweenReelBG();
    }

    tweenReelBG() {
    }
}
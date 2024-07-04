import * as PIXI from "pixi.js";
export class ReelBg {

    public baseReel: PIXI.Sprite;

    constructor(texture: any, x: number, y: number) {
        this.baseReel = new PIXI.Sprite(texture);
        this.baseReel.anchor.set(0.5);
        // this.baseReel.scale.set(0.2, 0.2);
        this.baseReel.x = x;
        this.baseReel.y = y;
        this.tweenReelBG();
    }

    tweenReelBG() {
    }
}
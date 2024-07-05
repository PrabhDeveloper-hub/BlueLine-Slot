
import * as PIXI from 'pixi.js';

export class JackpotWheel extends PIXI.Container {

    public wheel: PIXI.Sprite;
    constructor(texture:any,x:number,y:number) {
        super();
        this.name = "wheel container"
        this.wheel = PIXI.Sprite.from(texture);
        this.x = x;
        this.y=y;
        // this.alpha = 0;
        // this.wheel.scale.set(1.5, 1.5);
        this.wheel.anchor.set(0.5, 0.5);
        this.addChild(this.wheel);
    }
}
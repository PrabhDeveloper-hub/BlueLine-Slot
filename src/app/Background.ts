import * as PIXI from "pixi.js";
export class Background {
    public baseBg:PIXI.Sprite;
    
    constructor(texture:any,x:number,y:number){
        this.baseBg = new PIXI.Sprite(texture);
        this.baseBg.anchor.set(0.5);
        // this.baseBg.scale.set(1);
        this.baseBg.x = x;
        this.baseBg.y = y;
    }

   
}
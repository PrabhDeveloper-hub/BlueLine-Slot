import * as PIXI from "pixi.js";
export class SpinButton {

    public StartButton:PIXI.Sprite;
    public isClickable:boolean = true;
    constructor(texture:any,x:number,y:number){
        this.StartButton = new PIXI.Sprite(texture);
        this.StartButton.anchor.set(0.5);
        this.StartButton.scale.set(1.2);
        this.StartButton.x = x;
        this.StartButton.y = y;
        this.addEvents();
    }

    addEvents(){
        var self = this;
        this.StartButton.interactive = true;
        this.StartButton.on('pointerover', function(){
            self.StartButton.scale.set(1.2);
        })
        this.StartButton.on('pointerout', function(){
            self.StartButton.scale.set(1);
        })
        this.StartButton.on('pointerup', function(){
            document.dispatchEvent(new Event("StartSpin"));
        })
    }
}
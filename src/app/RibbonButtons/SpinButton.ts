import * as PIXI from "pixi.js";
export class SpinButton {

    public StartButton:PIXI.Sprite;
    public isClickable:boolean = true;
    private loader: PIXI.Loader;
    constructor(texture:any,x:number,y:number,loader: PIXI.Loader){
        this.loader = loader;
        this.StartButton = new PIXI.Sprite(texture);
        this.StartButton.anchor.set(0.5,0);
        this.StartButton.scale.set(0.5);
        this.StartButton.x = x;
        this.StartButton.y = y;
        this.addEvents();
    }

    addEvents(){
        var self = this;
        this.StartButton.interactive = true;
        this.StartButton.on('pointerover', function(){
            self.StartButton.scale.set(0.51);
        })
        this.StartButton.on('pointerout', function(){
            self.StartButton.scale.set(0.5);
        })
        this.StartButton.on('pointerup', function(){
            document.dispatchEvent(new Event("StartSpin"));
            self.StartButton.interactive = false;
            self.StartButton.texture = self.loader.resources.SpinOff.texture as PIXI.Texture;
        })

        
        document.addEventListener("spinComplete", () => {
            this.StartButton.interactive = true;
            this.StartButton.texture = self.loader.resources.SpinOn.texture as PIXI.Texture;
        });

    }
}
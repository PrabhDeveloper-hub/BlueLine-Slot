import * as PIXI from "pixi.js";
//@ts-ignore
import TWEEN from "@tweenjs/tween.js";
import { PAYLINECONFIG } from "../../cfg/game-variable-constants";
export class WinAnimation {

    public winImg: PIXI.Sprite;
    public graphics: PIXI.Graphics;
    public inProgress: Boolean = false;

    constructor(texture: any, x: number, y: number) {
        this.winImg = new PIXI.Sprite(texture);
        this.winImg.anchor.set(0.5);
        this.winImg.scale.set(0);
        this.winImg.x = x;
        this.winImg.y = y;
        this.graphics = new PIXI.Graphics();

    }

    playWin(winningSymbols: any) {
        new TWEEN.Tween(this.winImg.scale)
            .to({ x: 1, y: 1 }, 1000).easing(TWEEN.Easing.Bounce.Out).onComplete(() => {
                new TWEEN.Tween(this.winImg.scale)
                    .to({ x: 0, y: 0 }, 1000).onComplete(() => {
                        this.graphics.clear();
                        this.toggleSymbols(winningSymbols);
                    }).start()
            }).start()

    }
    createPaylines(winningSymbols: any) {
        this.inProgress = true;
        this.graphics.x = PAYLINECONFIG.x;
        this.graphics.y = PAYLINECONFIG.y;
        this.graphics.scale.x  = 0.7
        this.graphics.lineStyle(10, 0x3eff00, 1);
        this.graphics.moveTo(winningSymbols[0].x, winningSymbols[0].y* 0.5);
        console.log(winningSymbols)
        for (var points = 1; points < winningSymbols.length; points++) {
            this.graphics.lineTo(winningSymbols[points].x, winningSymbols[points].y * 0.5);
        }
        this.graphics.endFill();
        var self = this;

        setTimeout(function () {
            self.playWin(winningSymbols);
        }, 1000);
    }


    toggleSymbols(winningSymbols: any) {
        for (let i = 0; i < winningSymbols.length; i++) {
            new TWEEN.Tween(winningSymbols[i].symbol.scale)
                .to({ x: 0.1, y: 0.1, }, 500).onComplete(() => {
                    new TWEEN.Tween(winningSymbols[i].symbol.scale)
                        .to({ x: 1, y: 1 }, 500).onComplete(() => {
                            this.inProgress = false;
                        }).start()
                }).start()
        }

    }

}
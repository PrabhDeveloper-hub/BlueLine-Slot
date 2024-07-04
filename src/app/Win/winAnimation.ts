import * as PIXI from "pixi.js";
//@ts-ignore
import TWEEN from "@tweenjs/tween.js";
import { PAYLINES } from "../../cfg/game-variable-constants";

export class WinAnimation {

    public winImg: PIXI.Sprite;
    public graphics: PIXI.Graphics;
    public inProgress: Boolean = false;
    public spinEvent: Event;

    constructor(texture: any, x: number, y: number) {
        this.winImg = new PIXI.Sprite(texture);
        this.winImg.anchor.set(0.5);
        this.winImg.scale.set(0);
        this.winImg.x = x;
        this.winImg.y = y;
        this.graphics = new PIXI.Graphics();
        this.graphics.zIndex = 1;
        this.spinEvent = new Event("spinComplete");
    }

    playWin() {
        new TWEEN.Tween(this.winImg.scale)
            .to({ x: 1, y: 1 }, 700).easing(TWEEN.Easing.Elastic.Out).onComplete(() => {
                new TWEEN.Tween(this.winImg.scale)
                    .to({ x: 0, y: 0 }, 500).onComplete(() => {
                        this.graphics.clear();
                        document.dispatchEvent(this.spinEvent);
                    }).start()
            }).start()

    }

    // createPaylines(winningSymbols: any) {
    //     this.inProgress = true;
    //     this.graphics.x = PAYLINECONFIG.x;
    //     this.graphics.y = PAYLINECONFIG.y;
    //     this.graphics.scale.x = 0.7;
    //     this.graphics.lineStyle(10, 0x1434A4, 1);
    //     this.graphics.moveTo(winningSymbols[0].x, winningSymbols[0].y * 0.5);
    //     console.log(winningSymbols)
    //     for (var points = 1; points < winningSymbols.length; points++) {
    //         this.graphics.lineTo(winningSymbols[points].x, winningSymbols[points].y * 0.5);
    //     }
    //     this.graphics.endFill();
    //     // var self = this;

    //     // setTimeout(function () {
    //     //     self.playWin();
    //     // }, 1000);
    // }


    toggleSymbols(winningSymbols: any) {
        for (let i = 0; i < winningSymbols.length; i++) {
            new TWEEN.Tween(winningSymbols[i].symbol.scale)
                .to({ x: 0.1, y: 0.1, }, 500).onComplete(() => {
                    new TWEEN.Tween(winningSymbols[i].symbol.scale)
                        .to({ x: 1, y: 1 }, 500).onComplete(() => {
                            this.inProgress = false;
                            // document.dispatchEvent(this.spinEvent);
                        }).start()
                }).start()
        }

    }

    checkWinline(allReels: any) {
        let symbols: any[] = [];
        let allWinlines: any[] = [];
        for (let i = 0; i < allReels.length; i++) {
            let reelContainer = allReels[i].children[0];
            symbols.push(reelContainer.children);
        }

        for (let k = 0; k < PAYLINES.length; k++) {
            let winSymbols: any[] = [];
            let symbId_1 = symbols[0][PAYLINES[k][0]];
            let symbId_2 = symbols[1][PAYLINES[k][1]];
            let symbId_3 = symbols[2][PAYLINES[k][2]];
            if (symbId_1.texture.textureCacheIds[0] === symbId_2.texture.textureCacheIds[0]
                && symbId_2.texture.textureCacheIds[0] === symbId_3.texture.textureCacheIds[0]
                && symbId_1.texture.textureCacheIds[0] === symbId_3.texture.textureCacheIds[0]) {
                winSymbols.push(symbId_1, symbId_2, symbId_3);
                allWinlines.push(winSymbols);
            }
        }
        if (allWinlines.length) {
            this.animateWinLines(allWinlines)
            this.playWin();
        } else {
            document.dispatchEvent(this.spinEvent);
        }
    }

    animateWinLines(allWinlines: any) {
        console.log(allWinlines)
    }
}
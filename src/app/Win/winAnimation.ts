import * as PIXI from "pixi.js";
//@ts-ignore
import TWEEN from "@tweenjs/tween.js";
import { PAYLINES, WINCONFIG } from "../../cfg/game-variable-constants";

export class WinAnimation {

    public winImg: PIXI.Sprite;
    public inProgress: Boolean = false;
    public spinEvent: Event;
    public showParticles: Event;
    public totalWinLines: Number = 0;
    public winImageOnScreen: Boolean = false;
    constructor(texture: any, x: number, y: number) {
        this.winImg = new PIXI.Sprite(texture);
        this.winImg.anchor.set(0.5);
        this.winImg.scale.set(0);
        this.winImg.x = x;
        this.winImg.y = y;
        this.spinEvent = new Event("spinComplete");
        this.showParticles = new Event("showParticles");
    }

    playWin() {
        document.dispatchEvent(this.showParticles);
        this.winImageOnScreen = true;
        this.inProgress = true;
        new TWEEN.Tween(this.winImg.scale)
            .to({ x: 1, y: 1 }, WINCONFIG.ANIMATION_TIME / 2).easing(TWEEN.Easing.Elastic.Out).onComplete(() => {
                new TWEEN.Tween(this.winImg.scale)
                    .to({ x: 0, y: 0 }, WINCONFIG.ANIMATION_TIME / 2).onComplete(() => {
                        this.winImageOnScreen = false;

                    }).start()
            }).start()

    }

    toggleSymbols(winningSymbols: any) {
        for (let i = 0; i < winningSymbols.length; i++) {
            new TWEEN.Tween(winningSymbols[i].scale)
                .to({ x: 0.1, y: 0.1, }, WINCONFIG.ANIMATION_TIME / 4).onComplete(() => {
                    new TWEEN.Tween(winningSymbols[i].scale)
                        .to({ x: 1, y: 1 }, WINCONFIG.ANIMATION_TIME / 4).onComplete(() => {
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
            this.totalWinLines = allWinlines.length;
            this.animateWinLines(allWinlines)
            this.playWin();
        } else {
            document.dispatchEvent(this.spinEvent);
        }
    }

    animateWinLines(allWinlines: any) {
        for (let winline = 0; winline < allWinlines.length; winline++) {
            setTimeout(() => {
                if (this.totalWinLines == (winline + 1)) {
                    setTimeout(() => {
                        this.inProgress = false;
                        document.dispatchEvent(this.spinEvent);
                    }, WINCONFIG.ANIMATION_TIME / 2);
                }
                this.toggleSymbols(allWinlines[winline]);
            }, (winline + 2) * WINCONFIG.ANIMATION_TIME / 2);
        }
    }
}
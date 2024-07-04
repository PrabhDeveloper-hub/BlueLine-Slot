import * as PIXI from 'pixi.js';
import { ReelBg } from './ReelBg';
import { Reel } from './Reel';
import { REELSCONFIG } from '../../cfg/game-variable-constants';
import { WinAnimation } from '../Win/winAnimation';
//@ts-ignore
import TWEEN from "@tweenjs/tween.js";
import { JackpotWheel } from '../jackpot-wheel';

export class ReelPanel extends PIXI.Container {
    private loader: PIXI.Loader;
    private stageApp: any;
    public reelContainer: PIXI.Container;
    public reels: Array<Reel> = [];
    public WinAnim: WinAnimation;
    public Jackpot: JackpotWheel;
    win: any;
    tempTexture: any;
    tempPayline: any;
    winningSymbols: any = [];
    winBool: boolean = false;
    constructor(loader: PIXI.Loader, app: any) {
        super();
        this.loader = loader;
        this.stageApp = app;
        this.x = app.renderer.width / 2;
        this.y = app.renderer.height / 2;
        this.reelContainer = new PIXI.Container();
        this.reelContainer.x = -180;
        this.reelContainer.y = 20;
        this.reelContainer.scale.x = 0.5
        this.reelContainer.scale.y = 0.5
        this.reelContainer.zIndex = 2;
        this.Jackpot = new JackpotWheel(loader.resources.FortuneWheel.texture as PIXI.Texture, 1.2 * this.reelContainer.x, 50);
        this.addChild(this.Jackpot);
        this.createView();
        // this.scale.set(1.3);
        this.WinAnim = new WinAnimation(loader.resources.Win.texture as PIXI.Texture, 0, 0);
        
        this.addChild(this.WinAnim.graphics);
        this.addChild(this.WinAnim.winImg);

        document.addEventListener("StartSpin", () => {
            this.startSpinning();
        });
    }

    createView() {
        const reelBackground = new ReelBg(this.loader.resources.reelBackground.texture as PIXI.Texture, 0, 0);
        this.addChild(reelBackground.baseReel);
        this.addChild(this.reelContainer)

        for (var j = 0; j < REELSCONFIG.REELS_COUNT; j++) {
            const x = j * (REELSCONFIG.REEL_WIDTH + REELSCONFIG.REEL_OFFSET);
            const reel = new Reel(x);
            this.reelContainer.addChild(reel);
            this.reels.push(reel);
        }
        this.update();
    }

    startSpinning() {
        if (this.WinAnim.inProgress === false) {
           
            if ((this.reels[REELSCONFIG.REELS_COUNT - 1].isSpinning == false)) {
                var self = this;
                for (let i = 0; i < this.reels.length; i++) {
                    this.reels[i].isSpinning = true;
                    setTimeout(function () {
                        self.reels[i].isSpinning = false;
                        self.reels[i].reelItemsContainer.y = 0;
                        self.stopSpinning(i);
                    }, (i + 1) * REELSCONFIG.STOP_TIME)
                }
            }
        }

    }

    update() {
        this.stageApp.ticker.add((delta: any) => {
            TWEEN.update();
            if (this.Jackpot) {
                this.Jackpot.rotation += 0.003 * delta;
            }
            for (let i = 0; i < this.reels.length; i++) {
                if (this.reels[i].isSpinning) {
                    this.reels[i].reelItemsContainer.position.y += REELSCONFIG.SPIN_SPEED * delta;
                    if (this.reels[i].reelItemsContainer.position.y > REELSCONFIG.SYMBOL_SIZE) {
                        this.reels[i].reelItemsContainer.position.y = 0;
                        this.reels[i].replaceSymbols();
                    }
                }
            }


        })

    }

    stopSpinning(reelId: number) {
        
        new TWEEN.Tween(this.reels[reelId].reelItemsContainer)
            .to({ y: "+50" }, 200).easing(TWEEN.Easing.Quadratic.Out).onComplete(() => {
                new TWEEN.Tween(this.reels[reelId].reelItemsContainer)
                    .to({ y: "-50" }, 200).easing(TWEEN.Easing.Quadratic.Out).onComplete(() => {
                        if (reelId == REELSCONFIG.REELS_COUNT - 1) {
                            this.WinAnim.checkWinline(this.reels)
                            // document.dispatchEvent(this.WinAnim.spinEvent);
                        }
                    }).start()
            }).start()


    }

    
}
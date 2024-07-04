import * as PIXI from 'pixi.js'
import { REELSCONFIG } from '../../cfg/game-variable-constants';
import { Symbols } from '../../app';

export class Reel extends PIXI.Container {
    protected reelMask: PIXI.Graphics;
    public reelItemsContainer: PIXI.Container;
    public isSpinning: boolean = false;
    public isStopping: boolean = false;
    protected speedOffset: number = 0;
    public symbols: Array<PIXI.Sprite> = [];
    constructor(x: number) {
        super();
        this.name = "reelsContainer";
        this.x = x;
        this.y = -25;
        this.reelItemsContainer = new PIXI.Container();
        this.addChild(this.reelItemsContainer);
        this.reelMask = new PIXI.Graphics();
        this.addChild(this.reelMask);
        this.createReel();
    }

    createReel() {
        for (var i = 0; i < REELSCONFIG.SYMBOL_PER_REEL + 1; i++) {
            const symbol = new PIXI.Sprite(Symbols[Math.floor(Math.random() * Symbols.length)]);
            symbol.anchor.set(0.5);
            symbol.y = -1.5 * REELSCONFIG.SYMBOL_SIZE + (REELSCONFIG.SYMBOL_SIZE * i);
            symbol.scale.x = symbol.scale.y = Math.min(
                REELSCONFIG.REEL_WIDTH / symbol.width
            );
            symbol.x = REELSCONFIG.SYMBOL_SIZE - (symbol.width * 0.5);
            this.addChild(symbol);
            this.symbols.push(symbol);
            this.reelItemsContainer.addChild(symbol);

        }
        this.createMask();
    }

    replaceSymbols() {
        const temp = this.symbols.pop();
        if (temp) {
            temp.texture = Symbols[Math.floor(Math.random() * Symbols.length)];
            this.symbols.unshift(temp);
        }
        //@ts-ignore
        this.reelItemsContainer.children[0].texture = this.symbols[0].texture;
    }
    createMask() {
        this.reelMask.beginFill(0, 1);
        this.reelMask.drawRect(
            0,
            -REELSCONFIG.SYMBOL_SIZE,
            REELSCONFIG.REEL_WIDTH * REELSCONFIG.REELS_COUNT,
            (REELSCONFIG.SYMBOL_SIZE * 3)
        );
        this.reelMask.endFill();
        this.mask = this.reelMask;
        this.children.forEach((reel) => {
            reel.position.set(reel.position.x, 0);
        });
    }

}
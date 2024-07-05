# A seed for Pixi + Webpack + TypeScript projects

A "ready to dev" environment to work with PIXI.js, webpack & typescript for web oriented games/projects. Use it as a seed to begin a new project.

## Launch it

> Prerequisite:
> run `npm i` before first start

Run (dev): `npm start` then browse http://localhost:8080/ 
Build (prod): `npm run build` then use freshly generated "dist" 

## Code Structure

app/Background.ts - Contains the code for creating Backround of the game.

app/jackpot-wheel

    /index.ts - Contains the rotating jackpot wheel .

app/Reel

    /Reel.ts - In this file we are creating the reels , adding the symbols to reels and creating the mask of the reels.

    /ReeBg.ts - This file is adding the background reel panel Image. Some slots have different freespins background, so we can handle that functionality of swtiching reel panel image in this class.

    /ReelPanel.ts - This is the main container class where we are adding all the items related to reel view . In this file we are creating the total view by adding reels , winImage, Jackpot wheel and spinning and stopping reel functionality.

app/RibbonButtons

    /SpinButton.ts - contains logic of creating spin button and its event handling functions

app/Win

    /winAnimation.ts - This class is responsible for creating win animations and creating paylines. We are calling `checkWinline()` which is checking all the payline patterns after reels stop and then we are animating the win Image and symbols accordingly

assets

    /img - This folder contains all the images used in the game.

    /symbols - This folder contains all the symbols used in the game

cfg

    /Assets.ts - This file contains all the assets and their paths so that we can add new assets easily while working on the game. While reskinning any game we need to replace the assets so we can easily add or replace paths from this file

    /game-variable-constants.ts - This file contains the constans values used in the game we can configure it easily instead of searching the logic like spinning speed, reels count, offset between reels, scaling , Payline matrix(which contains the patterns for win).

app.ts - This file is the starting point of the game where we are initializing the `PIXI.Application`




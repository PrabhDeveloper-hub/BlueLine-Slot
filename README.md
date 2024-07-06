# 777 Slot Game 

[SLOT GAME](https://prabhjotsingh.itch.io/777-slot)

## Requirements
[Node.js](https://nodejs.org/en) is required to install dependencies and run scripts via npm.

## Available Commands
`npm install` - To install project dependencies

`npm start` - Launch a development web server

`npm run build` - Create a production build in the dist folder

## Running Code
After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

The local development server runs on `http://localhost:8080` by default. Please see the webpack documentation if you wish to change this, or add SSL support.

Once the server is running you can edit any of the files in the `src` folder. Webpack will automatically recompile your code and then reload the browser.

## Code Structure

app/Background.ts - Contains the code for creating Backround of the game.

app/jackpot-wheel/index.ts - Contains the rotating jackpot wheel .

app/Reel/Reel.ts - In this file we are creating the reels , adding the symbols to reels and creating the mask of the reels.

app/Reel/ReeBg.ts - This file is adding the background reel panel Image. Some slots have different freespins background, so we can handle that functionality of swtiching reel panel image in this class.

app/Reel/ReelPanel.ts - This is the main container class where we are adding all the items related to reel view . In this file we are creating the total view by adding reels , winImage, Jackpot wheel and spinning and stopping reel functionality.

app/RibbonButtons/SpinButton.ts - contains logic of creating spin button and its event handling functions

app/Win/winAnimation.ts - This class is responsible for creating win animations and creating paylines. We are calling `checkWinline()` which is checking all the payline patterns after reels stop and then we are animating the win Image and symbols accordingly

assets/img - This folder contains all the images used in the game.

assets/symbols - This folder contains all the symbols used in the game.

assets/sounds - This folder contains all sounds used in game.

cfg/Assets.ts - This file contains all the assets and their paths so that we can add new assets easily while working on the game. While reskinning any game we need to replace the assets so we can easily add or replace paths from this file

cfg/game-variable-constants.ts - This file contains the constans values used in the game we can configure it easily instead of searching the logic like spinning speed, reels count, offset between reels, scaling , Payline matrix(which contains the patterns for win).

app.ts - This file is the starting point of the game where we are initializing the `PIXI.Application` and using `PIXI.Loader.shared` we are loading all the assets (Images, Symbols , Sounds). 


## Pixi Particles

It is a particle system for use with the PixiJS library, a popular 2D rendering engine for creating interactive graphics and animations using WebGL. PixiParticles allows developers to create and control complex particle effects, such as explosions, fire, smoke, and other visual effects, in their PixiJS application.

Particle Emitters: Central to PixiParticles is the emitter, which defines how and where particles are generated. Emitters control the rate of particle creation, initial particle properties (like position, velocity, and lifespan), and the behaviors that affect particles over time.

How to use:-
1. Import Pixi particles
   ```sh
   import * as particles from 'pixi-particles';
   ```

2. Creating Emitter
    ```sh
    this.emitter = new particles.Emitter(
            this.reelContainer,
            [this.loader.resources.Coin.texture],
            PARTICLE_PROPS
        );
       
    this.emitter.emit = true;
    ```
    Here `PARTICLE_PROPS` is the json which has properties of particles like max speed, rotation, Lifetime etc. You can also configure your particles property using [Particle Editor](https://pixijs.io/pixi-particles-editor/#pixieDust)

3. Update Emitter
    ```sh
    if (this.emitter) {
                var now = Date.now();
                this.emitter.update((now - this.elapsed) * 0.0009);
                this.elapsed = now;
                this.emitter.emit = true;
    }
    ```
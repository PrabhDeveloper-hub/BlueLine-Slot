import * as PIXI from "pixi.js";
import { Sounds, StaticAssets } from "./cfg/Assets";
import { Background } from "./app/Background";
import { ReelPanel } from "./app/Reel/ReelPanel";
import { SYMBOL_IDS } from "./cfg/game-variable-constants";
import { SpinButton } from "./app/RibbonButtons/SpinButton";
import { sound } from '@pixi/sound';

//Create App
export const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  sharedTicker: true,
  sharedLoader: true,
  resizeTo: window,
  resolution:1
});
document.body.style.padding = '0px';
document.body.style.margin = '0px';
document.body.style.overflow = 'hidden';
document.body.appendChild(app.view);
const loader = PIXI.Loader.shared;
export const Symbols: any = [];

window.onresize = function () {
}


//Loading Assets
Sounds.forEach(asset => loader.add(asset.id, asset.src));

StaticAssets.forEach(asset => loader.add(asset.id, asset.src));
loader.onLoad.add((l: any, file: any) => {
  console.log(">>>>", l.progress, file.name)
})


loader.onComplete.add(() => {
})


loader.load(() => {
  //Adding Background Music
  sound.play('BgMusic',{loop:true});
  sound.volume('BgMusic');
  
  // Create different slot symbols.
  for (var texture = 0; texture < SYMBOL_IDS.length; texture++) {

    Symbols.push(PIXI.Texture.from(SYMBOL_IDS[texture]));
  }
  console.log(Symbols)
  const bg = new Background(loader.resources.background.texture as PIXI.Texture, app.renderer.width / 2, app.renderer.height / 2);
  app.stage.addChild(bg.baseBg);

  const reelView = new ReelPanel(loader, app);
  app.stage.addChild(reelView);

  const spinBtn = new SpinButton(loader.resources.SpinOn.texture as PIXI.Texture, app.renderer.width / 2 + reelView.width / 2.9, app.renderer.height / 2 + reelView.height / 3.8, loader)
  app.stage.addChild(spinBtn.StartButton);

});


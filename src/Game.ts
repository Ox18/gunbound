import * as PIXI from "pixi.js";
import { SceneManager } from "./core/SceneManager";
import { GameListScene } from "./game/scenes/GameListScene";

(async () => {
  const app = new PIXI.Application();
  await PIXI.Assets.load("animated-buttons.json")
  await PIXI.Assets.load("game-list-background.json");
  await app.init({
    width: 800,
    height: 600,
    background: "#1099bb",
  });

  document.body.appendChild(app.canvas);

  // SceneManager.init(app);
  // await SceneManager.change(new MainMenuScene());

  // app.ticker.add((ticker) => {
  //   SceneManager.update(ticker.deltaTime);
  // });
  SceneManager.init(app);
  await SceneManager.change(new GameListScene());

  app.ticker.add((ticker) => {
    SceneManager.update(ticker.deltaTime);
  });
})();

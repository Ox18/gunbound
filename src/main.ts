import * as PIXI from "pixi.js";
import { SceneManager } from "./core/SceneManager";
import { GameListScene } from "./game/scenes/GameListScene";

(async () => {
  const app = new PIXI.Application();
  await app.init({
    width: 1200,
    height: 900,
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

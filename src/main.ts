import * as PIXI from "pixi.js";
import { SceneManager } from "./core/SceneManager";
import { LobbyScene } from "./game/scenes/LobbyScene";

(async () => {
  const app = new PIXI.Application();
  await app.init({
    width: 1000,
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
  await SceneManager.change(new LobbyScene());

  app.ticker.add((ticker) => {
    SceneManager.update(ticker.deltaTime);
  });
})();

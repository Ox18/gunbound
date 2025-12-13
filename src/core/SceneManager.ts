import * as PIXI from "pixi.js";
import { Scene } from "./Scene";

export class SceneManager {
  private static app: PIXI.Application;
  private static currentScene: Scene | null = null;

  static init(app: PIXI.Application) {
    this.app = app;
  }

  static async change(scene: Scene) {
    if (this.currentScene) {
      this.app.stage.removeChild(this.currentScene.container);
      this.currentScene.destroy();
    }

    this.currentScene = scene;
    await scene.load();

    this.app.stage.addChild(scene.container);
  }

  static update(dt: number) {
    this.currentScene?.update(dt);
  }
}

import * as PIXI from "pixi.js";

export abstract class Scene { 
  container: PIXI.Container = new PIXI.Container();

  abstract load(): Promise<void>;
  abstract update(dt: number): void;

  destroy() {
    this.container.destroy({ children: true });
  }
}

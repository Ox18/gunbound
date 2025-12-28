import { Sprite } from '../../Animation/Sprite';
import { Vector2 } from '../../utils/Vector2';
import { SceneHandler } from './SceneHandler';
import * as PIXI from "pixi.js";

export abstract class GameScene {
  BackgroundOffset!: Vector2;
  Background!: Sprite;
  Container: PIXI.Container = new PIXI.Container();

  public OnSceneIsActive(): void {}

  public OnTryClosingGame(): void {
    SceneHandler.instance.CloseGame();
  }

  public BeginDraw(): void {
    // Override in derived classes
  }

  public Draw(): void {
    // Override in derived classes
    this.Background.Draw();
    console.log('Drawing GameScene background');
  }

  public EndDraw(): void {
    // Override in derived classes
  }

  public Dispose(): void {}
}

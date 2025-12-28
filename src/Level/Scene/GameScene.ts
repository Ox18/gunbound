import { Sprite } from '../../Animation/Sprite';
import { Cursor } from '../../Interface/Cursor';
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
    Cursor.Instance.Draw();
    this.Background.Draw();
  }

  public EndDraw(): void {
    // Override in derived classes
  }

  public Dispose(): void {}
}

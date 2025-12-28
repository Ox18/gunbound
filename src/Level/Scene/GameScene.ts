import { Sprite } from '../../Animation/Sprite';
import { Vector2 } from '../../utils/Vector2';
import { SceneHandler } from './SceneHandler';

export abstract class GameScene {
  BackgroundOffset!: Vector2;
  Background!: Sprite;

  public OnSceneIsActive(): void {}

  public OnTryClosingGame(): void {
    SceneHandler.instance.CloseGame();
  }

  public BeginDraw(): void {
    // Override in derived classes
  }

  public Draw(): void {
    // Override in derived classes
  }

  public EndDraw(): void {
    // Override in derived classes
  }

  public Dispose(): void {}
}

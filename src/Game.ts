import { SceneHandler, SceneType, TransitionEffectType } from './Level/Scene/SceneHandler';

export class Game {
  sceneHandler!: SceneHandler;

  constructor() {
    this.sceneHandler = SceneHandler.Instance;
    this.Initialize();
  }

  protected Initialize(): void {
    this.sceneHandler.Initialize();
  }

  protected LoadContent(): void {}

  protected UnloadContent(): void {}

  protected Update(): void {}

  protected Draw(): void {}

  public Run(): void {
    this.sceneHandler.RequestSceneChange(SceneType.GameList, TransitionEffectType.None, {});
  }
}

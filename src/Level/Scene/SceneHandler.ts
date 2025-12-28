import { Application } from '../../Application';
import { Queue } from '../../utils/Queue';
import { GameScene } from './GameScene';
import { GameList } from './Menu/GameList';

export enum TransitionEffectType {
  RotatingRectangles = 'RotatingRectangles',
  None = 'None',
}

export enum SceneType {
  GameLogo = 'GameLogo',
  ServerSelection = 'ServerSelection',
  GameList = 'GameList',
  GameRoom = 'GameRoom',
  AvatarShop = 'AvatarShop',
  InGame = 'InGame',
  Exit = 'Exit',
  LoadingScreen = 'LoadingScreen',
}

export enum SceneTransitionState {
  Ready = 'Ready',
  Transitioning = 'Transitioning',
}

export class SceneHandler {
  CurrentScene!: GameScene;
  NextScene!: Queue<GameScene>;

  IsChangingScene!: boolean;
  transitionWaitTime!: number;
  elapsedTime!: number;

  static instance: SceneHandler = new SceneHandler();
  // getter for singleton
  public static get Instance(): SceneHandler {
    if (!SceneHandler.instance) {
      SceneHandler.instance = new SceneHandler();
    }
    return SceneHandler.instance;
  }

  private SceneHandler() {
    this.NextScene = new Queue<GameScene>();
  }

  public Initialize(): void {
    this.CurrentScene = new GameList();
    this.IsChangingScene = false;
  }

  public ChangeScene(): void {
    if (this.NextScene.Count > 0) {
      this.CurrentScene.Dispose();
      this.CurrentScene = this.NextScene.Dequeue();
      this.CurrentScene.OnSceneIsActive();
      this.IsChangingScene = false;
    }
  }

  public CloseGame(): void {}

  public RequestSceneChange(sceneType: SceneType, transitionEffectType: TransitionEffectType, nextSceneParameter: object, transitionWaitTime: number = 0): void {
    if (this.IsChangingScene) return;

    this.IsChangingScene = true;

    this.elapsedTime = 0;
    this.transitionWaitTime = transitionWaitTime;

    const nextScene = this.BuildNextScene(sceneType, nextSceneParameter);

    if (this.CurrentScene) {
      Application.Instance.app.stage.removeChild(this.CurrentScene.Container);
      this.CurrentScene.Container.destroy();
    }

    if (nextScene) {
      console.log('Requesting scene change to:', sceneType);
      console.log('Next scene built:', nextScene);
      this.CurrentScene = nextScene;
      Application.Instance.app.stage.addChild(nextScene.Container);
      nextScene.Draw()
    }

    
  }

  private BuildNextScene(sceneType: SceneType, SceneParam: object): GameScene | null {
    if (sceneType === SceneType.GameList) return new GameList();

    return null;
  }

  public Draw(): void {
    this.CurrentScene.Draw();
  }
}

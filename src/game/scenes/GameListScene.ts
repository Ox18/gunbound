import { Sprite } from '../../Animation/Sprite';
import { Scene } from '../../core/Scene';
// import { SceneManager } from "../../core/SceneManager";
// import { AvatarButton } from "../../ui/buttons/AvatarButton";
// import { BuddyButton } from "../../ui/buttons/BuddyButton";
import * as PIXI from 'pixi.js';
import { Vector2 } from '../../utils/Vector2';
import { SceneManager } from '../../core/SceneManager';
// import { RoomScene } from "./RoomScene";

export class GameListScene extends Scene {
  // private button!: BuddyButton;
  // private avatarButton!: AvatarButton;

  async load() {
    // const texture = await PIXI.Assets.load(
    //   "/assets/interface/InGame/Scene/GameList/Background.png"
    // );
    // const texture = PIXI.Texture.from('GameListBackground');

    // const background = new PIXI.Sprite(texture);

    // background.width = 800;
    // background.height = 600;

    // this.container.addChild(background);

    ///////
    // Background = new Sprite(@"Interface/InGame/Scene/GameList/Background",
    //             position: Parameter.ScreenCenter,
    //             layerDepth: DepthParameter.Background,
    //             shouldCopyAsset: false);

    const Background = new Sprite('GameListBackground', Vector2.zero, 0, false);

    console.log(Background);
    console.log(SceneManager.currentScene)

    Background.Draw();
  }

  update(dt: number) {
    // Update logic for the lobby scene can go here
    // console.log('Lobby scene updating...', dt);
  }
}

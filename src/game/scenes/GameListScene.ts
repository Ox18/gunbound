import { Scene } from "../../core/Scene";
import { SceneManager } from "../../core/SceneManager";
// import { AvatarButton } from "../../ui/buttons/AvatarButton";
// import { BuddyButton } from "../../ui/buttons/BuddyButton";
import * as PIXI from "pixi.js";
// import { RoomScene } from "./RoomScene";

export class GameListScene extends Scene {
  // private button!: BuddyButton;
  // private avatarButton!: AvatarButton;

  async load() {
    const texture = await PIXI.Assets.load(
      "/assets/interface/InGame/Scene/GameList/Background.png"
    );

    const background = new PIXI.Sprite(texture);

    background.width = 800;
    background.height = 600;

    this.container.addChild(background);

    // this.button = new BuddyButton();
    // await this.button.load();

    // this.button.setPosition(180, 840);

    // this.button.onClick(() => {
    //   SceneManager.change(new RoomScene());
    // });

    // this.container.addChild(this.button.animatedSprite);

    // this.avatarButton = new AvatarButton();
    // await this.avatarButton.load();

    // this.avatarButton.setPosition(600, 830);
    // this.avatarButton.onClick(() => {
    //   console.log("vamonos a la tienda");
    // });

    // this.container.addChild(this.avatarButton.animatedSprite);
  }

  update(dt: number) {
    // Update logic for the lobby scene can go here
    console.log("Lobby scene updating...", dt);
  }
}

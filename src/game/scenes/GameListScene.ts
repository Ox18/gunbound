import { Scene } from "../../core/Scene";
import { SceneManager } from "../../core/SceneManager";
import { AvatarButton } from "../../ui/buttons/AvatarButton";
import { BuddyButton } from "../../ui/buttons/BuddyButton";
import { RoomScene } from "./RoomScene";
import * as PIXI from "pixi.js";

export class GameListScene extends Scene {
  private button!: BuddyButton;
  private avatarButton!: AvatarButton;

  async load() {
    const texture = await PIXI.Assets.load(
      "/assets/interface/InGame/Scene/GameList/Background.png"
    );

    const background = new PIXI.Sprite(texture);

    background.width = 1200;
    background.height = 900;

    this.container.addChild(background);

    this.button = new BuddyButton();
    await this.button.load();

    this.button.animatedSprite.anchor.set(0.5);
    // this.animatedSprite.scale.set(1.5);
    this.button.animatedSprite.cursor = "pointer";
    this.button.animatedSprite.scale.set(1.5);

    this.button.animatedSprite.position.set(180, 840);

    this.button.animatedSprite.on("pointerup", () => {
      SceneManager.change(new RoomScene());
    });

    this.container.addChild(this.button.animatedSprite);

    this.avatarButton = new AvatarButton();
    await this.avatarButton.load();

    this.avatarButton.animatedSprite.anchor.set(0.5);
    this.avatarButton.animatedSprite.cursor = "pointer";
    this.avatarButton.animatedSprite.scale.set(1.5);

    this.avatarButton.animatedSprite.position.set(600, 830);

    this.container.addChild(this.avatarButton.animatedSprite);
  }

  update(dt: number) {
    // Update logic for the lobby scene can go here
    console.log("Lobby scene updating...", dt);
  }
}

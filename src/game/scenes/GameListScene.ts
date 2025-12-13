import { Scene } from "../../core/Scene";
import { SceneManager } from "../../core/SceneManager";
import { BuddyButton } from "../../ui/buttons/BuddyButton";
import { RoomScene } from "./RoomScene";
import * as PIXI from "pixi.js";

export class GameListScene extends Scene {
  private button!: BuddyButton;

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
    this.button.animatedSprite.position.set(500, 450);

    this.button.animatedSprite.on("pointerup", () => {
      SceneManager.change(new RoomScene());
    });

    this.container.addChild(this.button.animatedSprite);
  }

  update(dt: number) {
    // Update logic for the lobby scene can go here
    console.log("Lobby scene updating...", dt);
  }
}

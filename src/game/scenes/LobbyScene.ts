import { Scene } from "../../core/Scene";
import { SceneManager } from "../../core/SceneManager";
import { BuddyButton } from "../../ui/buttons/BuddyButton";
import { RoomScene } from "./RoomScene";

export class LobbyScene extends Scene {
  private button!: BuddyButton;

  async load() {
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

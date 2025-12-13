import * as PIXI from "pixi.js";
import { BuddyButton } from "./ui/buttons/BuddyButton";

(async () => {
  const app = new PIXI.Application();
  await app.init({
    width: 400,
    height: 300,
    background: "#1099bb",
  });

  document.body.appendChild(app.canvas);

  const buddyButton = new BuddyButton();
  await buddyButton.load();

  app.stage.addChild(buddyButton.animatedSprite);
})();

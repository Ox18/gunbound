import { AnimatedButton } from "../widgets/AnimatedButton";

export class BuddyButton extends AnimatedButton {
  constructor() {
    super({
      asset_path: "/assets/buddy.png",
      frame_w: 66,
      frame_h: 66,
      cols: 20,
      total: 60,
      animation_points: {},
    });
  }
}

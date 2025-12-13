import { AnimatedButton } from "../widgets/AnimatedButton";

export class BuddyButton extends AnimatedButton {
  constructor() {
    super({
      asset_path: "/assets/interface/AnimatedButtons/Buddy.png",
      frame_w: 66,
      frame_h: 66,
      cols: 20,
      total: 60,
      animation: {
        normal: {
          frames: [19],
          speed: 0.001,
          loop: false,
        },
        hover: {
          frames: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19,
          ],
          speed: 0.5,
          loop: false,
        },
        clicked: {
          frames: [19],
          speed: 0.001,
          loop: false,
        },
        disabled: {
          frames: new Array(40).fill(57),
          speed: 0.001,
          loop: false,
        },
      },
    });
  }
}

import { AnimatedButton } from "../widgets/AnimatedButton";

export class AvatarButton extends AnimatedButton {
  //  {
  //         AnimatedButtonType.AvatarShop,
  //         new AnimatedButtonPreset() {
  //             SpritePath = "Interface/AnimatedButtons/GameList/Avatar",
  //             SpriteWidth = 1560/20, SpriteHeight = 474/6,
  //             Pivot = new Vector2((1560/20)/2, (474/6)/2), CollisionRectangleOffset = new Vector2(18, 21),
  //             StatePreset = new Dictionary<ButtonAnimationState, AnimationInstance>()
  //             {
  //                 { ButtonAnimationState.Normal,   new AnimationInstance() { StartingFrame = 080, EndingFrame = 099, TimePerFrame = 1/20f } },
  //                 { ButtonAnimationState.Hoover,   new AnimationInstance() { StartingFrame = 000, EndingFrame = 031, TimePerFrame = 1/31f } },
  //                 { ButtonAnimationState.Clicked,  new AnimationInstance() { StartingFrame = 032, EndingFrame = 079, TimePerFrame = 1/48f } },
  //                 { ButtonAnimationState.Disabled, new AnimationInstance() { StartingFrame = 101, EndingFrame = 101, TimePerFrame = 0.1f  } },
  //             },
  //         }
  //     },
  constructor() {
    super({
      asset_path: "/assets/interface/AnimatedButtons/GameList/Avatar.png",
      frame_w: 78,
      frame_h: 79,
      cols: 20,
      total: 102,
      animation: {
        normal: {
          frames: [
            80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
            97, 98, 99
          ],
          speed: 0.2,
          loop: true,
        },
        hover: {
          frames: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
          ],
          speed: 0.2,
          loop: false,
        },
        clicked: {
          frames: [
            32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
            49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
            66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
          ],
          speed: 0.2,
          loop: false,
        },
        disabled: {
          frames: [101],
          speed: 0.2,
          loop: false,
        },
      },
    });
  }
}

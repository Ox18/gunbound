import { Flipbook } from '../../Animation/Flipbook';
import { AnimationInstance } from '../../Animation/FlipbookAnimation';
import { Vector2 } from '../../utils/Vector2';
import { SpriteText } from '../Text/SpriteText';
import { ButtonAnimationState } from './Button';

export enum AnimationType {
  FowardStop = 'FowardStop',
  Cycle = 'Cycle',
  Playlist = 'Playlist',
}

enum AnimatedButtonType {
  AvatarShop = 'AvatarShop',
}

export interface AnimatedButtonPreset {
  SpritePath: string;
  StatePreset: Record<ButtonAnimationState, AnimationInstance>;
  SpriteWidth: number;
  SpriteHeight: number;
  Pivot: Vector2;
  CollisionRectangleOffset: Vector2;
}

export class AnimatedButton {
  static ButtonPresets: Record<AnimatedButtonType, AnimatedButtonPreset> = {
    AvatarShop: {
      SpritePath: 'Avatar',
      SpriteWidth: 1320 / 20,
      SpriteHeight: 132 / 2,
      Pivot: new Vector2(0.5, 0.5),
      CollisionRectangleOffset: new Vector2(0, 0),
      StatePreset: {
        [ButtonAnimationState.Normal]: new AnimationInstance({ StartingFrame: 0, EndingFrame: 9, TimePerFrame: 0.05 }),
        [ButtonAnimationState.Hoover]: new AnimationInstance({ StartingFrame: 10, EndingFrame: 19, TimePerFrame: 0.05 }),
        [ButtonAnimationState.Clicked]: new AnimationInstance({ StartingFrame: 20, EndingFrame: 29, TimePerFrame: 0.05 }),
        [ButtonAnimationState.Disabled]: new AnimationInstance({ StartingFrame: 30, EndingFrame: 39, TimePerFrame: 0.05 }),
        [ButtonAnimationState.Activated]: new AnimationInstance({ StartingFrame: 40, EndingFrame: 49, TimePerFrame: 0.05 }),
      },
    },
  };

  selectedPreset!: AnimatedButtonPreset;

  state!: ButtonAnimationState;

  ShouldUpdate!: boolean;

  Flipbook!: Flipbook;

  OnClick!: () => void;

  isBeingPressed!: boolean;

  constructor(buttonType: AnimatedButtonType, position: Vector2, onClick: () => void, buttonText: SpriteText | null = null) {
    this.selectedPreset = AnimatedButton.ButtonPresets[buttonType];

    this.state = ButtonAnimationState.Normal;
    this.ShouldUpdate = true;

    this.Flipbook = new Flipbook(position, this.selectedPreset.Pivot, this.selectedPreset.SpriteWidth, this.selectedPreset.SpriteHeight, this.selectedPreset.SpritePath, [this.selectedPreset.StatePreset[ButtonAnimationState.Normal]], 0, 0);

    this.OnClick = onClick;

    // collisionBox = new Rectangle(
    //             (int)(position.X - selectedPreset.CollisionRectangleOffset.X),
    //             (int)(position.Y - selectedPreset.CollisionRectangleOffset.Y),
    //             (int)(selectedPreset.CollisionRectangleOffset.X * 2),
    //             (int)(selectedPreset.CollisionRectangleOffset.Y * 2));

    this.isBeingPressed = false;

    if (buttonText != null) {
      //   animatedButtonText = buttonText;
      //   animatedButtonText.Position = position + new Vector2(0, 15);
    }

    /// DEBUG
  }
}

import { Vector2 } from '../utils/Vector2';
import { AnimationInstance, FlipbookAnimation } from './FlipbookAnimation';
import { Renderable } from './Renderable';

export class Flipbook extends Renderable {
  AnimationCycle!: Array<AnimationInstance>;

  currentAnimatedInstanceIndex!: number;
  repeatAnimationCycle!: boolean;
  framesPerLine!: number;

  FlipbookAnimationList!: Array<FlipbookAnimation>;

  CurrentAnimationInstance!: AnimationInstance;

  // constructor(position: Vector2, pivot: Vector2, spriteWidth: number, spriteHeight: number, texture2DPath: string, animationCycle: Array<AnimationInstance>, layerDepth: number, rotation: number = 0) {
  //   super();

  //   Flipbook.CreateFlipbook(this, position, pivot, spriteWidth, spriteHeight, texture2DPath, animationCycle, layerDepth, rotation);
  // }

  constructor(position: Vector2, pivot: Vector2, spriteWidth: number, spriteHeight: number, texture2DPath: string, animationInstance: AnimationInstance, layerDepth: number, rotation: number = 0) {
    super();

    const animationList = new Array<AnimationInstance>();
    animationList.push(animationInstance);

    Flipbook.CreateFlipbook(this, position, pivot, spriteWidth, spriteHeight, texture2DPath, animationList, layerDepth, rotation);
  }

  static CreateFlipbook(flipbook: Flipbook, position: Vector2, pivot: Vector2, spriteWidth: number, spriteHeight: number, texture2DPath: string, animationCycle: Array<AnimationInstance>, layerDepth: number, rotation: number = 0): void {
    flipbook.SpriteWidth = spriteWidth;
    flipbook.SpriteHeight = spriteHeight;
    flipbook.Texture2DPath = texture2DPath;
    flipbook.Rotation = rotation;
    flipbook.AnimationCycle = animationCycle;

    flipbook.Position = position;
    flipbook.Pivot = pivot;

    flipbook.currentAnimatedInstanceIndex = 0;
    flipbook.repeatAnimationCycle = false;

    flipbook.LayerDepth = layerDepth;

    flipbook.FlipbookAnimationList = new Array<FlipbookAnimation>();

    flipbook.CreateFlipbookInstances();
  }

  private CreateFlipbookInstances() {
    this.FlipbookAnimationList = new Array<FlipbookAnimation>();

    for (const animationInstance of this.AnimationCycle) {
      console.log((animationInstance));
      this.FlipbookAnimationList.push(FlipbookAnimation.GetInstance(animationInstance));
    }
  }
}

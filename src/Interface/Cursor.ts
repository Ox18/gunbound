import { Flipbook } from '../Animation/Flipbook';
import { AnimationInstance, AnimationType } from '../Animation/FlipbookAnimation';
import { DepthParameter } from '../Common/DepthParameter';
import { Vector2 } from '../utils/Vector2';

export enum MouseCursorState {
  Idle = 'Idle',
  Click = 'Click',
  DragCamera = 'DragCamera',
  DragShot = 'DragShot',

  ScrollN = 'ScrollN',
  ScrollNE = 'ScrollNE',
  ScrollNW = 'ScrollNW',

  ScrollS = 'ScrollS',
  ScrollSE = 'ScrollSE',
  ScrollSW = 'ScrollSW',

  ScrollE = 'ScrollE',
  ScrollW = 'ScrollW',
}

export class Cursor {
  private static FlipbookDictionary: Map<MouseCursorState, Flipbook> = new Map<MouseCursorState, Flipbook>([
    [
      MouseCursorState.Idle,
      new Flipbook(
        Vector2.default,
        Vector2.default,
        22,
        22,
        'Interface/Cursor/Cursor',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 16,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],
    [
      MouseCursorState.Click,
      new Flipbook(
        Vector2.default,
        Vector2.default,
        22,
        22,
        'Interface/Cursor/CursorClick',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 9,
          TimePerFrame: 0.2,
        }),
        DepthParameter.Cursor,
      ),
    ],

    [
      MouseCursorState.DragCamera,
      new Flipbook(
        Vector2.default,
        new Vector2(11, 11),
        22,
        22,
        'Interface/Cursor/DragCamera',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 4,
          TimePerFrame: 0.1,
          AnimationType: AnimationType.FowardStop,
        }),
        DepthParameter.Cursor,
      ),
    ],
    [
      MouseCursorState.DragShot,
      new Flipbook(
        Vector2.default,
        new Vector2(12, 11.5),
        24,
        23,
        'Interface/Cursor/DragShot',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 5,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],

    [
      MouseCursorState.ScrollN,
      new Flipbook(
        Vector2.default,
        new Vector2(12, 0),
        24,
        23,
        'Interface/Cursor/ScrollN',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 7,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],
    [
      MouseCursorState.ScrollS,
      new Flipbook(
        Vector2.default,
        new Vector2(12, 23),
        24,
        23,
        'Interface/Cursor/ScrollS',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 7,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],
    [
      MouseCursorState.ScrollE,
      new Flipbook(
        Vector2.default,
        new Vector2(23, 12),
        24,
        23,
        'Interface/Cursor/ScrollE',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 7,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],
    [
      MouseCursorState.ScrollW,
      new Flipbook(
        Vector2.default,
        new Vector2(0, 11.5),
        24,
        23,
        'Interface/Cursor/ScrollW',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 7,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],

    [
      MouseCursorState.ScrollNE,
      new Flipbook(
        Vector2.default,
        new Vector2(24, 0),
        24,
        23,
        'Interface/Cursor/ScrollNE',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 7,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],
    [
      MouseCursorState.ScrollNW,
      new Flipbook(
        Vector2.default,
        Vector2.default,
        24,
        23,
        'Interface/Cursor/ScrollNW',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 7,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],
    [
      MouseCursorState.ScrollSE,
      new Flipbook(
        Vector2.default,
        new Vector2(24, 23),
        24,
        23,
        'Interface/Cursor/ScrollSE',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 7,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],
    [
      MouseCursorState.ScrollSW,
      new Flipbook(
        Vector2.default,
        new Vector2(0, 23),
        24,
        23,
        'Interface/Cursor/ScrollSW',
        new AnimationInstance({
          StartingFrame: 0,
          EndingFrame: 7,
          TimePerFrame: 0.1,
        }),
        DepthParameter.Cursor,
      ),
    ],
  ]);

  MouseCursorState!: MouseCursorState;
  CurrentFlipbook!: Flipbook;
  cameraOffset!: Vector2;

  static Instance: Cursor = new Cursor();

  private constructor() {
    Cursor.Instance = this;
    this.MouseCursorState = MouseCursorState.Idle;

    this.CurrentFlipbook = Cursor.FlipbookDictionary.get(this.MouseCursorState)!;
  }

  public SetMouseCursorSceneState(): void {
    // FlipbookDictionary[MouseCursorState.Idle].Position = CurrentFlipbook.Position;
    Cursor.FlipbookDictionary.get(this.MouseCursorState)!.Position = this.CurrentFlipbook.Position;
  }

  private ChangeState(NewState: MouseCursorState): void {
    // if
    if (!this.IsChangeStateValid(NewState)) return;

    this.MouseCursorState = NewState;
    this.CurrentFlipbook = Cursor.FlipbookDictionary.get(this.MouseCursorState)!;
    // this.CurrentFlipbook.reset
  }

  private IsChangeStateValid(NewState: MouseCursorState): boolean {
    if (NewState === this.MouseCursorState) return false;

    return true;
  }

  public Draw(): void {
    
  }
}

export enum AnimationType {
  Foward = 1,
  FowardStop = 2,
  Cycle = 3,
  Playlist = 4,
}

export class AnimationInstance {
  StartingFrame!: number;
  EndingFrame!: number;
  TimePerFrame!: number;
  AnimationType!: AnimationType;

  constructor(data: Partial<AnimationInstance>) {
    Object.assign(this, data);
  }
}

export abstract class FlipbookAnimation {
  AnimationInstance!: AnimationInstance;

  timePast!: number;

  AnimationType!: AnimationType;

  CurrentFrameIndex!: number;

  AnimationEnded!: boolean;

  IsLastFrame!: boolean;

  constructor(FlipbookInstance: AnimationInstance) {
    this.AnimationInstance = FlipbookInstance;
    this.CurrentFrameIndex = FlipbookInstance.StartingFrame;
  }

  static GetInstance(FlipbookInstance: AnimationInstance): FlipbookAnimation {
    switch (FlipbookInstance.AnimationType) {
      case AnimationType.Foward:
        return new FlipbookAnimationFoward(FlipbookInstance);
      case AnimationType.FowardStop:
        return new FlipbookAnimationFowardStop(FlipbookInstance);
      case AnimationType.Cycle:
        return new FlipbookAnimationCycle(FlipbookInstance);
      default:
        throw new Error('Unsupported Animation Type');
    }
  }
}

export class FlipbookAnimationFoward extends FlipbookAnimation {
  constructor(FlipbookInstance: AnimationInstance) {
    super(FlipbookInstance);
  }

  GetNextAnimationIndex() {}
}

export class FlipbookAnimationFowardStop extends FlipbookAnimation {
  constructor(FlipbookInstance: AnimationInstance) {
    super(FlipbookInstance);
  }

  GetNextAnimationIndex() {}
}

export class FlipbookAnimationCycle extends FlipbookAnimation {
  isBackwards = false;
  constructor(FlipbookInstance: AnimationInstance) {
    super(FlipbookInstance);
  }

  GetNextAnimationIndex() {}
}

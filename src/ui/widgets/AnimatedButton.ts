import * as PIXI from "pixi.js";

interface AnimatedButtonConfig {
  asset_path: string;
  frame_w: number;
  frame_h: number;
  cols: number;
  total: number;
  animation_points: unknown;
}

export class AnimatedButton {
  config: AnimatedButtonConfig = {
    asset_path: "",
    frame_w: 0,
    frame_h: 0,
    cols: 0,
    total: 0,
    animation_points: {},
  };
  frames_textures: PIXI.Texture[] = [];
  frames: PIXI.Texture[] = [];
  animatedSprite!: PIXI.AnimatedSprite;

  constructor(config: AnimatedButtonConfig) {
    this.config = config;
  }

  async load() {
    const image = await PIXI.Assets.load(this.config.asset_path);

    for (let i = 0; i < this.config.total; i++) {
      const x = (i % this.config.cols) * this.config.frame_w;
      const y = Math.floor(i / this.config.cols) * this.config.frame_h;

      this.frames.push(
        new PIXI.Texture({
          source: image.source,
          frame: new PIXI.Rectangle(
            x,
            y,
            this.config.frame_w,
            this.config.frame_h
          ),
        })
      );
    }

    const animations = {
      normal: [this.frames[19]],
      hover: this.frames.slice(0, 20),
      clicked: this.frames.slice(18, 57),
      disabled: [this.frames[57]],
    };

    this.animatedSprite = new PIXI.AnimatedSprite(animations.normal);

    this.animatedSprite.anchor.set(0.5);
    this.animatedSprite.position.set(200, 150);
    this.animatedSprite.interactive = true;
    this.animatedSprite.cursor = "pointer";

    this.play([this.frames[19]], 0.001, false);

    this.animatedSprite.on("pointerover", () =>
      this.play(this.frames.slice(0, 20), 0.2)
    );
    this.animatedSprite.on("pointerout", () =>
      this.play([this.frames[19]], 0.001, false)
    );
    this.animatedSprite.on("pointerdown", () =>
      this.play(this.frames.slice(18, 57), 1 / 28, false)
    );
  }

  play(textures: PIXI.Texture[], speed: number, loop = true) {
    this.animatedSprite.textures = textures;
    this.animatedSprite.animationSpeed = speed;
    this.animatedSprite.loop = loop;
    this.animatedSprite.gotoAndPlay(0);
  }
}

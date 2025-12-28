import { SceneHandler } from '../Level/Scene/SceneHandler';
import { Color } from '../utils/Color';
import { Vector2 } from '../utils/Vector2';
import * as Pixi from 'pixi.js';

export abstract class Renderable {
  Position!: Vector2;
  PositionOffset!: Vector2;
  Pivot!: Vector2;
  SpriteWidth!: number;
  SpriteHeight!: number;
  Rotation!: number;
  Texture2DPath!: string;
  Scale!: Vector2;
  Color!: Color;
  LayerDepth!: number;
  Texture2D!: Pixi.Texture;


  constructor() {
    this.Scale = Vector2.one;
    this.Color = Color.White;
  }

  public Draw(): void {
    const sprite = new Pixi.Sprite(this.Texture2D);
    sprite.width = this.SpriteWidth;
    sprite.height = this.SpriteHeight;
    console.log('Drawing sprite with texture:', this.Texture2DPath);
    console.log(SceneHandler.Instance)
    SceneHandler.Instance.CurrentScene.Container.addChild(sprite);
  }
}

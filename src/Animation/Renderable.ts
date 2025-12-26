import { Color } from '../utils/Color';
import { Vector2 } from '../utils/Vector2';

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

  constructor() {
    this.Scale = Vector2.one;
    this.Color = Color.White;
  }
}

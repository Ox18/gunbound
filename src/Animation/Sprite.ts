import { Vector2 } from '../utils/Vector2';
import { Renderable } from './Renderable';

export class Sprite extends Renderable {
  constructor(texture2DPath: string, position: Vector2 = Vector2.one, layerDepth: number = 0, shouldCopyAsset: boolean = false) {
    super();

    this.Position = position;
    this.Texture2DPath = texture2DPath;

    console.log(`Sprite created at position (${this.Position.x}, ${this.Position.y}) with texture: ${this.Texture2DPath}`);
    console.log(`Layer Depth: ${layerDepth}, Should Copy Asset: ${shouldCopyAsset}`);
  }
}

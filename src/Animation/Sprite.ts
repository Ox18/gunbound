import { AssetHandler } from '../Asset/AssetHandler';
import { Vector2 } from '../utils/Vector2';
import { Renderable } from './Renderable';

export class Sprite extends Renderable {
  constructor(texture2DPath: string, position: Vector2 = Vector2.one, layerDepth: number = 0, shouldCopyAsset: boolean = false) {
    super();

    this.LayerDepth = layerDepth;
    this.Position = position;
    this.Texture2DPath = texture2DPath;

    // this.Texture2D = AssetHandler.Instance.RequestTexture(texture2DPath);

    if (shouldCopyAsset) {
      this.Texture2D = AssetHandler.Instance.RequestTexture(texture2DPath);
    } else {
      this.Texture2D = AssetHandler.Instance.RequestTexture(texture2DPath);
    }

    try {
      this.SpriteWidth = this.Texture2D.width;
      this.SpriteHeight = this.Texture2D.height;
    } catch (error) {
      console.error('Error loading texture for Sprite:', error);
      console.log('Texture2DPath:', texture2DPath);
    }
    // this.Pivot = new Vector2(this.SpriteWidth / 2, this.SpriteHeight / 2);
  }

  // constructor(textureWidth: number, textureHeight: number, position: Vector2 = Vector2.one, layerDepth: number = 0) {
  //   super();

  //   this.LayerDepth = layerDepth;
  //   this.Position = position;
  //   this.PositionOffset = position;

  //   this.Texture2D = AssetHandler.Instance.CreateAsset(textureWidth, textureHeight);

  //   this.SpriteWidth = textureWidth;
  //   this.SpriteHeight = textureHeight;
  // }
}

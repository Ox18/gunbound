import * as PIXI from 'pixi.js';

export class AssetHandler {
  static Instance: AssetHandler = new AssetHandler();

  public CreateAsset(Width: number, Height: number): PIXI.Sprite {
    const texture = PIXI.Texture.WHITE;
    const sprite = new PIXI.Sprite(texture);
    sprite.width = Width;
    sprite.height = Height;
    return sprite;
  }

  public RequestTexture(path: string): PIXI.Texture {
    const texture = PIXI.Texture.from(path);
    return texture;
  }
}

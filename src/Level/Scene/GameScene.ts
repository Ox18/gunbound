import { Sprite } from '../../Animation/Sprite';
import { Vector2 } from '../../utils/Vector2';

export abstract class GameScene {
  BackgroundOffset!: Vector2;
  Background!: Sprite;
}

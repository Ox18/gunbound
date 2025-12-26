import { Sprite } from '../../../Animation/Sprite';
import { AnimatedButton } from '../../../Interface/Interactive/AnimatedButton';
import { Vector2 } from '../../../utils/Vector2';
import { GameScene } from '../GameScene';

export class GameList extends GameScene {
  private animatedButtonList!: Array<AnimatedButton>;

  constructor() {
    super();

    this.animatedButtonList = new Array<AnimatedButton>();

    this.Background = new Sprite('Interface/InGame/Scene/GameList/Background', new Vector2(0, 0), 0, false);
  }
}

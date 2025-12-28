import * as PIXI from 'pixi.js';
import { Game } from './Game';
import { Application } from './Application';

(async () => {
  await PIXI.Assets.load('animated-buttons.json');
  await PIXI.Assets.load('game-list-background.json');
  await Application.Instance.app.init({
    width: 800,
    height: 600,
    background: '#1099bb',
  });
  document.body.appendChild(Application.Instance.app.canvas);

  // Application.Instance.app.canvas.style.cursor = 'none';
  // document.body.style.cursor = 'none';

  const game = new Game();

  game.Run();
})();

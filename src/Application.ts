import * as PIXI from 'pixi.js';

export class Application {
  static Instance: Application = new Application();

  app = new PIXI.Application();

  constructor() {}
}

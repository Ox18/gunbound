import { Scene } from "../../core/Scene";

export class BattleScene extends Scene {
  async load(): Promise<void> {}

  update(dt: number): void {
    console.log("Battle scene updating...", dt);
  }
}

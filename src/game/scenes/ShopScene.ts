import { Scene } from "../../core/Scene";

export class ShopScene extends Scene {
  async load() {}

  update(dt: number): void {
    console.log("Shop scene updating...", dt);
  }
}

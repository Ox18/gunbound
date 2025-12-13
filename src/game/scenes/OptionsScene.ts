import { Scene } from "../../core/Scene";

export class OptionsScene extends Scene {
  async load(): Promise<void> {}

  update(dt: number): void {
    console.log("Options scene updating...", dt);
  }
}

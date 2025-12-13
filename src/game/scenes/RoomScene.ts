import { Scene } from "../../core/Scene";

export class RoomScene extends Scene {
  async load(): Promise<void> {}

  update(dt: number): void {
    console.log("Room scene updating...", dt);
  }
}

import { Scene } from "../../core/Scene";

export class ServersScene extends Scene {
    async load(): Promise<void> {
        console.log("ServersScene loaded");    
    }

    update(dt: number): void {
        console.log("ServersScene updating...", dt);
    }
}
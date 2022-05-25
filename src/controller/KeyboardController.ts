import { Chorder } from "../domain/chord/Chorder";
import { convertCharToKey } from "../domain/chord/Key";

export class KeyboardController {
  constructor(window: Window, private readonly chorder: Chorder) {
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  private handleKeyDown(event: KeyboardEvent) {
    const key = convertCharToKey(event.key);
    if (!key) {
      return;
    }

    this.chorder.press(key);
  }

  private handleKeyUp(event: KeyboardEvent) {
    const key = convertCharToKey(event.key);
    if (!key) {
      return;
    }

    const s = this.chorder.release(key);
    console.log(s);
  }
}

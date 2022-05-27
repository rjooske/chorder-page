import { Chorder } from "../domain/chord/Chorder";
import { convertCharToKey } from "../domain/key/Key";

export class Editor {
  constructor(
    private readonly textarea: HTMLTextAreaElement,
    private readonly chorder: Chorder
  ) {
    textarea.addEventListener("keydown", this.handleKeyDown.bind(this));
    textarea.addEventListener("keyup", this.handleKeyUp.bind(this));
    textarea.addEventListener("compositionupdate", () => chorder.reset());
  }

  private handleKeyDown(event: KeyboardEvent) {
    const key = convertKeyboardEventToKey(event);
    if (!key) {
      return;
    }

    event.preventDefault();

    this.chorder.press(key);
  }

  private handleKeyUp(event: KeyboardEvent) {
    const key = convertKeyboardEventToKey(event);
    if (!key) {
      return;
    }

    event.preventDefault();

    const replacement = this.chorder.release(key);
    if (!replacement) {
      return;
    }

    const selectionStart = this.textarea.selectionStart;
    const selectionEnd = this.textarea.selectionEnd;
    this.textarea.setRangeText(replacement, selectionStart, selectionEnd);

    const selectionPosition = selectionStart + replacement.length;
    this.textarea.setSelectionRange(selectionPosition, selectionPosition);
  }
}

function convertKeyboardEventToKey(event: KeyboardEvent) {
  if (
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    event.repeat ||
    event.isComposing
  ) {
    return;
  }

  // FIXME: do not rely on event.key
  return convertCharToKey(event.key);
}

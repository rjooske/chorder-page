import { Chorder } from "../domain/chord/Chorder";
import { convertCharToKey } from "../domain/key/Key";

type Mode = "hiragana" | "katakana";

export class Editor {
  private mode: Mode = "hiragana";

  constructor(
    private readonly textarea: HTMLTextAreaElement,
    private readonly button: HTMLButtonElement,
    private readonly hiraganaChorder: Chorder,
    private readonly katakanaChorder: Chorder
  ) {
    textarea.addEventListener("keydown", this.handleKeyDown.bind(this));
    textarea.addEventListener("keyup", this.handleKeyUp.bind(this));
    textarea.addEventListener("compositionupdate", () => {
      hiraganaChorder.reset();
      katakanaChorder.reset();
    });

    textarea.addEventListener("keydown", (e) => {
      if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
        this.toggleMode();
      }
    });
    button.addEventListener("click", () => this.toggleMode());
  }

  private handleKeyDown(event: KeyboardEvent) {
    const key = convertKeyboardEventToKey(event);
    if (!key) {
      return;
    }

    event.preventDefault();

    this.hiraganaChorder.press(key);
    this.katakanaChorder.press(key);
  }

  private handleKeyUp(event: KeyboardEvent) {
    const key = convertKeyboardEventToKey(event);
    if (!key) {
      return;
    }

    event.preventDefault();

    const hiragana = this.hiraganaChorder.release(key);
    const katakana = this.katakanaChorder.release(key);

    if (this.mode === "hiragana" && hiragana) {
      this.insert(hiragana);
    } else if (this.mode === "katakana" && katakana) {
      this.insert(katakana);
    }
  }

  private insert(text: string) {
    const selectionStart = this.textarea.selectionStart;
    const selectionEnd = this.textarea.selectionEnd;
    this.textarea.setRangeText(text, selectionStart, selectionEnd);

    const selectionPosition = selectionStart + text.length;
    this.textarea.setSelectionRange(selectionPosition, selectionPosition);
  }

  private setMode(mode: Mode) {
    this.mode = mode;
    this.button.innerHTML = convertModeToSymbol(mode);
  }

  private toggleMode() {
    if (this.mode === "hiragana") {
      this.setMode("katakana");
    } else {
      this.setMode("hiragana");
    }
  }
}

function convertKeyboardEventToKey(event: KeyboardEvent) {
  if (
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    event.isComposing
  ) {
    return;
  }

  // FIXME: do not rely on event.key
  return convertCharToKey(event.key);
}

function convertModeToSymbol(mode: Mode) {
  switch (mode) {
    case "hiragana":
      return "あ";
    case "katakana":
      return "ア";
  }
}

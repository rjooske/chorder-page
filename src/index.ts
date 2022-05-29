import { Editor } from "./controller/Editor";
import { Chorder } from "./domain/chord/Chorder";
import { HiraganaChordMap } from "./domain/chord/HiraganaChordMap";
import { KatakanaChordMap } from "./domain/chord/KatakanaChordMap";

function main() {
  const textarea = document.querySelector("#editor");
  const button = document.querySelector("#mode");
  if (
    !(
      textarea instanceof HTMLTextAreaElement &&
      button instanceof HTMLButtonElement
    )
  ) {
    return;
  }

  new Editor(
    textarea,
    button,
    new Chorder(new HiraganaChordMap()),
    new Chorder(new KatakanaChordMap())
  );
}

main();

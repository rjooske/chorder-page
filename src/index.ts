import { Editor } from "./controller/Editor";
import { Chorder } from "./domain/chord/Chorder";
import { JapaneseChordMap } from "./domain/chord/JapaneseChordMap";

function main() {
  const textarea = document.querySelector("#editor");
  if (!(textarea instanceof HTMLTextAreaElement)) {
    return;
  }

  new Editor(textarea, new Chorder(new JapaneseChordMap()));
}

main();

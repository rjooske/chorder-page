import { Editor } from "./controller/Editor";
import { Chorder } from "./domain/chord/Chorder";
import { HiraganaChordMap } from "./domain/chord/HiraganaChordMap";

function main() {
  const textarea = document.querySelector("#editor");
  if (!(textarea instanceof HTMLTextAreaElement)) {
    return;
  }

  new Editor(textarea, new Chorder(new HiraganaChordMap()));
}

main();

import { Editor } from "./controller/Editor";
import { LogExporter } from "./controller/LogExporter";
import { Chorder } from "./domain/chord/Chorder";
import { HiraganaChordMap } from "./domain/chord/HiraganaChordMap";
import { KatakanaChordMap } from "./domain/chord/KatakanaChordMap";
import { KeyLogger } from "./domain/key/KeyLogger";

function main() {
  const textarea = document.querySelector("#editor");
  const modeButton = document.querySelector("#mode");
  const exportButton = document.querySelector("#export");
  if (
    !(
      textarea instanceof HTMLTextAreaElement &&
      modeButton instanceof HTMLButtonElement &&
      exportButton instanceof HTMLAnchorElement
    )
  ) {
    return;
  }

  const keyLogger = new KeyLogger();
  new Editor(
    textarea,
    modeButton,
    new Chorder(new HiraganaChordMap()),
    new Chorder(new KatakanaChordMap()),
    keyLogger
  );
  new LogExporter(exportButton, keyLogger, new Date());
}

main();

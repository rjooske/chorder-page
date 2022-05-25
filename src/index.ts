import { KeyboardController } from "./controller/KeyboardController";
import { Chorder } from "./domain/chord/Chorder";
import { JapaneseChordMap } from "./domain/chord/JapaneseChordMap";

function main() {
  new KeyboardController(window, new Chorder(new JapaneseChordMap()));
}

main();

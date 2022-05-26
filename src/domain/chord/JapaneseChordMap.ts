import { Chord } from "./Chord";
import { ChordMap } from "./ChordMap";
import conversions from "./JapaneseChordMap.json";
import { convertStringToKeys, Key } from "./Key";

const romajiToHiragana = conversions.flatMap(({ romajis, hiragana }) =>
  romajis
    .map((e) => convertStringToKeys(e))
    .filter((e): e is Key[] => !!e)
    .map((e) => ({ chord: new Chord(e), replacement: hiragana }))
);

export class JapaneseChordMap implements ChordMap {
  map(chord: Chord) {
    for (const entry of romajiToHiragana) {
      if (entry.chord.equals(chord)) {
        return entry.replacement;
      }
    }

    return "";
  }
}

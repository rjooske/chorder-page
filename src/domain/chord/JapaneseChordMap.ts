import { convertStringToKeys, Key } from "../key/Key";
import { Chord } from "./Chord";
import { ChordMap } from "./ChordMap";
import conversions from "./JapaneseChordMap.json";

const mappings = conversions.flatMap(({ romajis, hiragana }) =>
  romajis
    .map((e) => convertStringToKeys(e))
    .filter((e): e is Key[] => !!e)
    .map((e) => ({ chord: new Chord(e), replacement: hiragana }))
);

export class JapaneseChordMap implements ChordMap {
  map(chord: Chord) {
    const mapping = mappings.find((e) => e.chord.equals(chord));
    if (!mapping) {
      return "";
    }

    return mapping.replacement;
  }
}

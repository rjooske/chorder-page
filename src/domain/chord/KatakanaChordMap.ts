import { Chord } from "./Chord";
import { ChordMap } from "./ChordMap";
import { HiraganaChordMap } from "./HiraganaChordMap";

const hiraganaChordMap = new HiraganaChordMap();

export class KatakanaChordMap implements ChordMap {
  map(chord: Chord) {
    return convertHiraganaToKatakana(hiraganaChordMap.map(chord));
  }
}

function convertHiraganaToKatakana(hiragana: string) {
  return [...hiragana]
    .map((e) => {
      const codePoint = e.codePointAt(0) ?? 0;
      if (0x3041 <= codePoint && codePoint <= 0x3096) {
        return codePoint + 0x60;
      }
      return codePoint;
    })
    .map((e) => String.fromCodePoint(e))
    .join("");
}

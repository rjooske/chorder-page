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
    const chordWithoutSpace = chord.without("space");
    const mapping = findMapping(chordWithoutSpace);
    if (!mapping) {
      return "";
    }

    if (chord.contains("space")) {
      if (isVowel(chordWithoutSpace)) {
        return "";
      } else {
        return "っ" + mapping.replacement;
      }
    }

    return mapping.replacement;
  }
}

function findMapping(chord: Chord) {
  return mappings.find((e) => e.chord.equals(chord));
}

function isVowel(chord: Chord) {
  if (chord.size() !== 1) {
    return false;
  }

  const vowels: Key[] = ["a", "i", "u", "e", "o"];
  return vowels.some((e) => chord.contains(e));
}

import { convertStringToKeys, Key } from "../key/Key";
import { Chord } from "./Chord";
import { ChordMap } from "./ChordMap";
import conversions from "./HiraganaChordMap.json";

const mappings = conversions.flatMap(({ romajis, hiragana, canGeminate }) =>
  romajis
    .map((e) => convertStringToKeys(e))
    .filter((e): e is Key[] => !!e)
    .map((e) => new Chord(e))
    .flatMap((chord) => {
      if (canGeminate) {
        return [
          { chord, hiragana },
          { chord: chord.with("space"), hiragana: "っ" + hiragana },
        ];
      } else {
        return [{ chord, hiragana }];
      }
    })
);

export class HiraganaChordMap implements ChordMap {
  map(chord: Chord) {
    const mapping = findMapping(chord);
    if (!mapping) {
      return "";
    }

    return mapping.hiragana;
  }
}

function findMapping(chord: Chord) {
  return mappings.find((e) => e.chord.equals(chord));
}

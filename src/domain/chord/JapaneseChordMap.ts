import { Chord } from "./Chord";
import { ChordMap } from "./ChordMap";
import { convertStringToKey } from "./Key";

const romanToHiragana = `
  _a a _i i _u u _e e _o o
  ka ga ki gi ku gu ke ge ko go
  sa za shi ji su zu se ze so zo
  ta da chi di _tsu tsu du te de to do
  na ni nu ne no
  ha ba pa hi bi pi hu bu pu he be pe ho bo po
  ma mi mu me mo
  _ya ya _yu yu _yo yo
  ra ri ru re ro
  _wa wa * * wo n vu
`
  .trim()
  .split(/\s+/)
  .map((roman) => {
    if (roman === "*") {
      return [];
    }
    if (roman.includes("_")) {
      return [roman.replace("_", "l"), roman.replace("_", "x")];
    }
    return [roman];
  })
  .map((romans) =>
    romans.map((roman) => new Chord(convertStringToKey(roman) ?? []))
  )
  .flatMap((chords, i) =>
    chords.map((chord) => ({
      chord,
      replacement: String.fromCodePoint(i + 0x3041),
    }))
  );

export class JapaneseChordMap implements ChordMap {
  map(chord: Chord) {
    for (const entry of romanToHiragana) {
      if (entry.chord.equals(chord)) {
        return entry.replacement;
      }
    }

    return "";
  }
}

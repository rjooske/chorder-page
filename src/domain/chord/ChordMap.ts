import { Chord } from "./Chord";

export interface ChordMap {
  map(chord: Chord): string;
}

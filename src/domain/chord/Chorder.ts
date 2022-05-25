import { Chord } from "./Chord";
import { ChordMap } from "./ChordMap";
import { Key } from "./Key";

type KeyState = "pressed" | "released";

export class Chorder {
  private readonly keyStates = new Map<Key, KeyState>();

  constructor(private readonly map: ChordMap) {}

  press(key: Key) {
    this.keyStates.set(key, "pressed");
  }

  release(key: Key) {
    this.keyStates.set(key, "released");

    if ([...this.keyStates].every(([_, state]) => state === "released")) {
      const chord = convertKeyStatesToChord(this.keyStates);
      this.keyStates.clear();
      return this.map.map(chord);
    }
  }
}

function convertKeyStatesToChord(keyStates: Map<Key, KeyState>) {
  return new Chord([...keyStates].map(([key]) => key));
}

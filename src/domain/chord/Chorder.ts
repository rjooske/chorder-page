import { Key } from "../key/Key";
import { Chord } from "./Chord";
import { ChordMap } from "./ChordMap";

type KeyState = "pressed" | "released";

export class Chorder {
  private readonly keyStates = new Map<Key, KeyState>();

  constructor(private readonly map: ChordMap) {}

  press(key: Key) {
    this.keyStates.set(key, "pressed");
  }

  release(key: Key) {
    // TODO: it's a bit awkward to manage the states of the keys here
    if (this.keyStates.get(key) !== "pressed") {
      return;
    }

    this.keyStates.set(key, "released");

    if ([...this.keyStates].every(([_, state]) => state === "released")) {
      const chord = convertKeyStatesToChord(this.keyStates);
      this.keyStates.clear();
      return this.map.map(chord);
    }
  }

  reset() {
    this.keyStates.clear();
  }
}

function convertKeyStatesToChord(keyStates: Map<Key, KeyState>) {
  return new Chord([...keyStates].map(([key]) => key));
}

import { Key } from "../key/Key";

export class Chord {
  private readonly keys: Key[];

  constructor(keys: Key[]) {
    this.keys = dedupe(keys);
  }

  equals(chord: Chord) {
    if (this.keys.length !== chord.keys.length) {
      return false;
    }

    return this.keys.every((key) => chord.keys.includes(key));
  }

  contains(key: Key) {
    return this.keys.includes(key);
  }

  without(key: Key) {
    return new Chord([...this.keys].filter((e) => e !== key));
  }

  size() {
    return this.keys.length;
  }
}

function dedupe(keys: Key[]) {
  const result: Key[] = [];

  for (const key of keys) {
    if (!result.includes(key)) {
      result.push(key);
    }
  }

  return result;
}

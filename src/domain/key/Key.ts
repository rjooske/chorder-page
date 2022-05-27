export type Key =
  | "space"
  | "hyphen"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

export function convertCharToKey(char: string): Key | undefined {
  if (char.length !== 1) {
    return;
  }

  if (char === " ") {
    return "space";
  }

  if (char === "-") {
    return "hyphen";
  }

  if (char.match(/[A-Za-z]/)) {
    return char.toLowerCase() as Key;
  }
}

export function convertStringToKeys(string: string) {
  const keys: Key[] = [];

  for (const char of string) {
    const key = convertCharToKey(char);
    if (!key) {
      return;
    }
    keys.push(key);
  }

  return keys;
}

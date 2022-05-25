export type Key =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

function convertCharToKey(char: string) {
  if (char.match(/[A-Za-z]/)) {
    return char.toUpperCase() as Key;
  }
}

export function convertStringToKey(string: string) {
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

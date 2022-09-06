import { KeyMotion } from "./KeyMotion";

export interface KeyLog {
  when: Date;
  code: string;
  motion: KeyMotion;
}

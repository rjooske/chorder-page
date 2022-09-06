import { KeyLog } from "./KeyLog";

export class KeyLogger {
  readonly logs: KeyLog[] = [];

  log(log: KeyLog) {
    this.logs.push(log);
  }
}

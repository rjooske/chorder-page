import { KeyLogger } from "../domain/key/KeyLogger";

export class LogExporter {
  constructor(
    private readonly exportButton: HTMLAnchorElement,
    private readonly keyLogger: KeyLogger,
    private readonly appStartTime: Date
  ) {
    exportButton.addEventListener(
      "click",
      this.handleExportButtonClick.bind(this)
    );
  }

  private handleExportButtonClick() {
    this.exportButton.href =
      "data:text/csv;charset=UTF-8," +
      encodeURIComponent(this.stringifyLogsAsCsv());
  }

  private stringifyLogsAsCsv() {
    let str = "Milliseconds since page loaded,Keycode,Motion\n";
    for (const log of this.keyLogger.logs) {
      str += log.when.getTime() - this.appStartTime.getTime();
      str += ",";
      str += log.code;
      str += ",";
      str += log.motion;
      str += "\n";
    }
    return str;
  }
}

import { KeyLogger } from "../domain/key/KeyLogger";

export class LogExporter {
  constructor(
    exportButton: HTMLButtonElement,
    private readonly keyLogger: KeyLogger,
    private readonly appStartTime: Date
  ) {
    exportButton.addEventListener(
      "click",
      this.handleExportButtonClick.bind(this)
    );
  }

  private handleExportButtonClick() {
    downloadStringAsFile("text/csv", "log.csv", this.stringifyLogsAsCsv());
  }

  private stringifyLogsAsCsv() {
    const logs = this.keyLogger.logs;
    const rows = new Array<string>(logs.length + 1);
    rows[0] = "Milliseconds since page loaded,Keycode,Motion";
    for (let i = 0; i < logs.length; i++) {
      const log = logs[i];
      const time = log.when.getTime() - this.appStartTime.getTime();
      rows[i + 1] = `${time},${log.code},${log.motion}`;
    }
    return rows.join("\n");
  }
}

function downloadStringAsFile(
  mimeType: string,
  filename: string,
  content: string
) {
  const a = document.createElement("a");
  a.href = `data:${mimeType};charset=UTF-8,${encodeURIComponent(content)}`;
  a.download = filename;
  a.click();
}

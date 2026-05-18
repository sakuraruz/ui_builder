import { app, BrowserWindow, dialog, ipcMain } from "electron";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);
const rootDir = path.resolve(currentDir, "../..");

ipcMain.handle("export-project-folder", async (_event, payload) => {
  const result = await dialog.showOpenDialog({
    title: "Выберите папку для экспорта",
    properties: ["openDirectory", "createDirectory"]
  });

  if (result.canceled || result.filePaths.length === 0) {
    return { canceled: true };
  }

  const safeFolderName = sanitizeFolderName(payload.folderName || "project-export");
  const exportDir = path.join(result.filePaths[0], safeFolderName);
  await fs.mkdir(exportDir, { recursive: true });
  await fs.writeFile(path.join(exportDir, "index.html"), payload.files.html, "utf8");
  await fs.writeFile(path.join(exportDir, "styles.css"), payload.files.css, "utf8");

  return { canceled: false, path: exportDir };
});

function sanitizeFolderName(value) {
  return String(value).replace(/[<>:"/\\|?*]/g, "-").trim() || "project-export";
}

function createMainWindow() {
  const window = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 1040,
    minHeight: 720,
    title: "Visual Interface Builder",
    backgroundColor: "#eef0ed",
    webPreferences: {
      preload: path.join(rootDir, "src/preload/index.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  window.loadFile(path.join(rootDir, "src/renderer/index.html"));
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

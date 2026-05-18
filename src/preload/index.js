import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("builderApi", {
  platform: process.platform,
  exportProject: (payload) => ipcRenderer.invoke("export-project-folder", payload)
});

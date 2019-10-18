// const { app, BrowserWindow } = require("electron");

// function createWindow() {
//   // Create the browser window.
//   let win = new BrowserWindow({
//     width: auto,
//     height: auto,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   });

//   // and load the index.html of the app.
//   win.loadURL("http://localhost:3000/");
// }

// app.on("ready", createWindow);

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   if (mainWindow === null) {
//     createWindow();
//   }
// });

const electron = require("electron");
const { app, BrowserWindow } = electron;

let win;

app.on("ready", () => {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  // const icon = path.join(__dirname, "./head.png");
  win = new BrowserWindow({ width, height });

  win.loadURL("http://softbike-dash.dev.myddp.eu//");
});

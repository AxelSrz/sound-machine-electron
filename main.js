'use strict';


const electron = require('electron');
const {app, BrowserWindow} = electron;


let mainWindow = null;
app.on('ready', () => {

    mainWindow = new BrowserWindow({
        frame: false,
        height: 700,
        resizable: false,
        width: 368
    });


    mainWindow.loadFile('app/index.html');
})


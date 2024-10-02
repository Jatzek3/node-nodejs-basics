import fs from 'node:fs';

const rename = async () => {
    if (!fs.existsSync('./files/wrongFilename.txt') ||
        fs.existsSync('./files/properFilename.md') ){
        throw "FS operation failed"

    } 
    else { 
    fs.rename(
        './files/wrongFilename.txt',
        './files/properFilename.md',
        () => {
            console.log("\nFile Renamed!\n");
        });
    };
}
await rename()
import fs from 'node:fs';

const read = async () => {
    if (!fs.existsSync('./files/fileToRead.txt')){
        throw "FS operation failed" 
    } 
    else {
        const data = fs.readFileSync('./files/fileToRead.txt', 'utf8');
        console.log(data);
    }
};

await read();
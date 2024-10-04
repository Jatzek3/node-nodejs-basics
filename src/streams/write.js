import fs from 'node:fs';

const write = async () => {
    const writeStream = fs.createWriteStream('./files/fileToWrite.txt');
    process.stdin.on('data', data => { 
        writeStream.write(data.toString()); 
        process.exit(); 
      });
}

 
await write();
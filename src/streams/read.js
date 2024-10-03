import fs from 'node:fs';

const read = async () => {
    const readStream = fs.createReadStream('./files/fileToRead.txt')

    readStream.on('data', (buffer)=> {
        console.log(buffer.toString())
        process.stdout.write(buffer.toString())
    })
};

await read();
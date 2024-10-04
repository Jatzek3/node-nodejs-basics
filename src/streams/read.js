import fs from 'node:fs';

const read = async () => {
    const readStream = fs.createReadStream('./files/fileToRead.txt')

    readStream.on('data', (buffer)=> {
        process.stdout.write(buffer.toString())
    })
    // readStream.on('end',() => {
    //     console.log('stream ended')
    // })
};

await read();
import zlib from 'node:zlib';;
import fs from 'fs';

const decompress = async () => {
    const unzip = zlib.createUnzip()
    const input = fs.createReadStream('./files/archive.gz')
    const out = fs.createWriteStream('./files/fileToCompress.txt')

    input.pipe(unzip).pipe(out)

};

await decompress();
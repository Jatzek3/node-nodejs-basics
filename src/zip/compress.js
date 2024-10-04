import zlib from 'node:zlib';;
import fs from 'fs';

const compress = async () => {
    const gzip = zlib.createGzip()
    const input = fs.createReadStream('./files/fileToCompress.txt')
    const out = fs.createWriteStream('./files/archive.gz')

    input.pipe(gzip).pipe(out)
};

await compress();
import {createHash} from 'crypto'
import fs  from 'fs'

const calculateHash = async () => {
    let hash = createHash('sha256');
    const data = fs.readFileSync('./files/fileToCalculateHashFor.txt', 'utf8');
    console.log(hash.update(data).digest('hex'))
};

await calculateHash();
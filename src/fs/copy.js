import fs from 'node:fs';

const copy = async () => {
    if (fs.existsSync('files_copy/')){

        throw "FS operation failed" 
    } 
    else {
        fs.cpSync('files', 'files_copy/', {recursive: true})
    }
};

await copy();

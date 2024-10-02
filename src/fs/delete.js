import fs from 'node:fs';

const remove = async () => {
    if (!fs.existsSync('./files/fileToRemove.txt')){
        throw "FS operation failed" 
    }else
    {
        fs.unlinkSync('./files/fileToRemove.txt')
    }
};

await remove();
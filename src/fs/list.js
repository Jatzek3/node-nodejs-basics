import fs from 'node:fs';

const list = async () => {
    if (!fs.existsSync('./files/')){
        throw "FS operation failed" 
    } 
    else {
        fs.readdirSync('./files/').forEach(file => {
            console.log(file);
          });
    }
};

await list();
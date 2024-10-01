import fs from 'node:fs';

const create = async () => {
     if (fs.existsSync('./files/fresh.txt')){
        throw "FS operation failed" 

    } 
    else {
        fs.writeFileSync('./files/fresh.txt', 'I am fresh and young',{});
    }
};

await create();
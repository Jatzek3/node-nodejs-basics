import fs from 'node:fs';


const parseEnv = () => {
    const data = fs.readFileSync('.env', 'utf-8');
    console.log(data)
};

parseEnv();
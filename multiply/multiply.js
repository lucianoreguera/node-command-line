const fs = require('fs');
const colors = require('colors');

const listTable = (base, limit = 10) => {

    console.log('=========='.green);
    console.log(`Table of ${base}`.green);
    console.log('=========='.green);

    let result = '';
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

    return result;
};

const createFile = (base, limit) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`Value ${base} is not a number`);
            return;
        }
        
        for (let i = 1; i <= limit; i++) {
            const result = base * i;
            data += `${base} * ${i} = ${result}\n`;
        }
        
        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if 
                (err) reject(err);
            else
                resolve(`table-${base}.txt`);
        });
    });
};

module.exports = {
    createFile,
    listTable
};

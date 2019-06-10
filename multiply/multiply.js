// requireds
const fs = require('fs');
const colors = require('colors');


let listTabla = (base, limit) => {
    let data = '';

    console.log('====================================='.green);
    console.log(` tabla de ${ base } `.rainbow);
    console.log('====================================='.green);
    for (let i = 1; i <= limit; i++) {
        let result = base * i;
        data += `${base} * ${i} = ${result}\n`;
    }
    console.log(data);
}

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        } else if (!Number(limit)) {
            reject(`El valor introducido ${limit} no es un numero`);
            return;

        }


        let data = '';

        for (let i = 1; i <= limit; i++) {
            let result = base * i;
            data += `${base} * ${i} = ${result}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    createFile,
    listTabla
}
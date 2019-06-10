const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { createFile, listTabla } = require('./multiply/multiply');

let command = argv._[0];

switch (command) {
    case 'listar':
        console.log('listar');
        listTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('crear');
        createFile(argv.base, argv.limite)
            .then(file => console.log(`File has been saved ${colors.green(file)}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
        break;
}
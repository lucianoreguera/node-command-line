const { createFile, listTable } = require('./multiply/multiply');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const command = argv._[0];

switch (command) {
    case 'list':
        listTable(argv.base, argv.limit);
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`Create file: ${colors.green(file)}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('no command exists');
        break;
}

// const argv = process.argv;
// const param = argv[2];
// const base = param.split('=')[1];



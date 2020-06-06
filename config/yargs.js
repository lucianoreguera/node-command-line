const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias:'l',
        default: 10
    }
};

const argv = require('yargs')
            .command('list', 'print out the multiplication table on the console', options)
            .command('create', 'generates a file with the multiplication table', options)
            .help()
            .argv;

module.exports = {
    argv
};
import {version} from '../package.json';
const chalk = require('chalk');

const runCommand = (params) => {

    switch (params[2]) {
        case 'create:migration':
            if(params[3]){
                const createMigration = require('./commands/migration');
                createMigration(params[3]);
            }else{
                console.log(chalk.red('Missing required second argument: migration name'));
            }            
            break;
        
        case 'create:model':
            if(params[3]){
                const createModel = require('./commands/model');
                createModel(params[3]);
            }else{
                console.log(chalk.red('Missing required second argument: model name'));
            }              
            break;

        case 'create:controller':
            if(params[3]){
                const createController = require('./commands/controller');
                createController(params[3]);
            }else{
                console.log(chalk.red('Missing required second argument: controller name'));
            }              
            break;

        case 'create:all':
            if(params[3] && params[4]){
                const createMigration = require('./commands/migration');
                const createController = require('./commands/controller');
                const createModel = require('./commands/model');

                createMigration(params[3]);
                createModel(params[3]);
                createController(params[3]);
            }else{
                console.log(chalk.red('Some required argument is missing: model name and table name'));
            }
            break;
        
        case '--help':
            const help = require('../templates/help');
            console.log(help);            
            break;
        
        case '--version':            
            console.log(version);
            break;
    
        default:
            console.log(chalk.red(`unknown command: ${params[2]}`));
            break;
    }
}

export function cli(argv){
    runCommand(argv);
}


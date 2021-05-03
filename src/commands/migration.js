const chalk = require('chalk');
const fs = require('fs');
const pathBase = process.cwd();

let templateMigration = require('../../templates/migration');
const message = chalk.blue('New migration was created at ');

const fileNameMigration = (table) => {
    let fileName = '';
    let migrationName = `create-${table.toLowerCase()}`;
    let date = new Date();

    let year = date.getUTCFullYear();
    let month = String(("0" + (date.getUTCMonth() + 1)).slice(-2));
    let day = String(("0" + date.getUTCDate()).slice(-2));
    let hours = String(("0" + date.getUTCHours()).slice(-2));
    let minutes = String(("0" + date.getUTCMinutes()).slice(-2));
    let seconds = String(("0" +  date.getUTCSeconds()).slice(-2));

    fileName = `${year+month+day+hours+minutes+seconds}-${migrationName}`;

    return fileName;
}

const createMigration = (tableName) => {

    const pathFolderDB = `${pathBase}/db`;
    const pathFolderMigration = `${pathFolderDB}/migrations`;
    const filename = fileNameMigration(tableName);
    const pathFile = `${pathFolderMigration}/${filename}.js`;

    if (!fs.existsSync(pathFolderDB)) {        
        fs.mkdirSync(pathFolderDB);
        if(!fs.existsSync(pathFolderMigration)){
            fs.mkdirSync(pathFolderMigration)
        }
    }
    try {
        templateMigration = templateMigration.replace('$tableNameUp', tableName);
        templateMigration = templateMigration.replace('$tableNameDown', tableName);
        fs.writeFileSync(pathFile, templateMigration, { mode: 0o777 });
    } catch(err) {
        console.error(err);
    } finally {
        console.log(message + chalk.green(pathFile));
    }
}

module.exports = createMigration;
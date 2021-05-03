const chalk = require('chalk');
const fs = require('fs');
const pathBase = process.cwd();

let templateModel = require('../../templates/model');
const message = chalk.blue('New model was created at ');

const createMigration = (modelName) => {

    const pathFolderModels = `${pathBase}/src/models`;
    const pathFile = `${pathFolderModels}/${modelName}.js`;

    if (!fs.existsSync(pathFolderModels)) {        
        fs.mkdirSync(pathFolderModels);
    }
    try {
        templateModel = templateModel.replace('$modelNameConst', modelName);
        templateModel = templateModel.replace('$modelNameDefine', modelName);
        templateModel = templateModel.replace('$modelNameExport', modelName);
        fs.writeFileSync(pathFile, templateModel, { mode: 0o777 });
    } catch(err) {
        console.error(err);
    } finally {
        console.log(message + chalk.green(pathFile));
    }
}

module.exports = createMigration;
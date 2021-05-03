const chalk = require('chalk');
const fs = require('fs');
const pathBase = process.cwd();


let templateController = require('../../templates/controller');
const config = require('../../sb-config');
const message = chalk.blue('New controller was created at ');

const fileNameController = (model) => {
    fileName = `${model}Controller`;
    return fileName;
}

const createMigration = (modelName) => {

    const pathFolderController = config['controllers-path'] ? config['controllers-path']: `${pathBase}/src/controllers`;
    const filename = fileNameController(modelName);
    const pathFile = `${pathFolderController}/${filename}.js`;

    if (!fs.existsSync(pathFolderController)) {        
        fs.mkdirSync(pathFolderController);
    }
    try {
        templateController = templateController.replace('$modelName', modelName);
        templateController = templateController.replace('$modelPath', modelName);
        fs.writeFileSync(pathFile, templateController, { mode: 0o777 });
    } catch(err) {
        console.error(err);
    } finally {
        console.log(message + chalk.green(pathFile));
    }
}

module.exports = createMigration;
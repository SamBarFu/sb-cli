module.exports = `
const { Sequelize, DataTypes } = require('sequelize');
const sequilize = require('../db');

const $modelNameConst = sequilize.define('$modelNameDefine', {

});

module.exports = $modelNameExport;
`
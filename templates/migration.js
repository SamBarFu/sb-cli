module.exports = `
const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('$tableNameUp', {
      id: {
        primaryKey: true, 
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('$tableNameDown');
  }
};
`
module.exports = `
sb-cli 1.0.0

comands:
sb create:all              Generates a models and its migration and its controller [attributes: model name, table name]
sb create:controller       Generates a new file controller [attributes: controller name]
sb create:migration        Generates a new file migration [attributes: migration name]
sb create:model            generates a new file model [attributes: model name]

options:
--help [-h]                Show help
--version [-v]             Show version number
`;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
 name: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Project;
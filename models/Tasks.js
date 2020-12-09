/* jshint indent: 2 */

'use strict';

const moment = require('moment');

module.exports=(sequelize, DataTypes) => {
    var Task = sequelize.define('Tasks', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      task_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      task_date: {
        allowNull: false,
        type: DataTypes.DATE,
        get: function() {
          return moment(this.getDataValue('task_date')).format('ll');}
      },
      task_time_start: {
        allowNull: false,
        type: DataTypes.TIME
      },
      task_time_end: {
        allowNull: true,
        type: DataTypes.TIME
      },
      task_loc: {
        allowNull: true,
        type: DataTypes.STRING
      },
      isDone: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
    });

    return Task;
};

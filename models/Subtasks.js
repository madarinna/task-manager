/* jshint indent: 2 */

'use strict';

const moment = require('moment');

module.exports=(sequelize, DataTypes) => {
    var Subtask = sequelize.define('Subtasks', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      mainTaskId: {
        allowNull: false,
        type: DataTypes.UUID
      },
      subtask_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtask_date: {
        allowNull: false,
        type: DataTypes.DATE,
        get: function() {
          return moment(this.getDataValue('subtask_date')).format('ll');}
      },
      subtask_time_start: {
        allowNull: false,
        type: DataTypes.TIME
      },
      subtask_time_end: {
        allowNull: true,
        type: DataTypes.TIME
      },
      subtask_loc: {
        allowNull: true,
        type: DataTypes.STRING
      },
      isDone: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
    });

    return Subtask;
};

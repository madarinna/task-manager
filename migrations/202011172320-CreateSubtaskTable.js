'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.createTable('Subtasks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      mainTaskId: {
        allowNull: false,
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
      },
      subtask_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subtask_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      subtask_time_start: {
        allowNull: false,
        type: Sequelize.TIME,
      },
      subtask_time_end: {
        allowNull: true,
        type: Sequelize.TIME
      },
      subtask_loc: {
        allowNull: true,
        type: Sequelize.STRING
      },
      isDone: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
  });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Subtasks');
  }
};

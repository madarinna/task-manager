'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
      },
      task_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      task_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      task_time_start: {
        allowNull: false,
        type: Sequelize.TIME,
      },
      task_time_end: {
        allowNull: true,
        type: Sequelize.TIME
      },
      task_loc: {
        allowNull: true,
        type: Sequelize.STRING
      },
  });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};

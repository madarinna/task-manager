'use strict';


const columnAndTypes = [{
  name: 'isDone',
  type: (Sequelize) => {
    return {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }
}];

// Don't change it
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map(c => {
        return queryInterface.addColumn(
          'Tasks',
          c.name,
          c.type(Sequelize)
        )
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map(c => {
        return queryInterface.removeColumn(
          'Tasks',
          c.name,
        )
      })
    )
  }
};

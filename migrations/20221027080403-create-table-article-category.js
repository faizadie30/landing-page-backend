'use strict';

/* postgres version */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('article_category', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      category_uuid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('article_category', {
      type: 'unique',
      fields: ['title'],
      name: 'UNIQUE_CATEGORY_TITLE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('articel_category');
  },
};

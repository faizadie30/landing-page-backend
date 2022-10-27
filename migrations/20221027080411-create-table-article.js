'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('article', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      short_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_visible: {
        type: Sequelize.BOOLEAN,
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

    await queryInterface.addConstraint('article', {
      type: 'foreign key',
      name: 'CATEGORY_ARTICLE__ID',
      fields: ['category_id'],
      references: {
        table: 'article_category',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('article');
  },
};

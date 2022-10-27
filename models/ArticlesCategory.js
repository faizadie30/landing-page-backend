module.exports = (Sequelize, DataTypes) => {
  const Article_Category = Sequelize.define(
    'Article_Category',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      category_uuid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'article_category',
      timestamps: true,
    }
  );

  return Article_Category;
};

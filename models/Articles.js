module.exports = (Sequelize, DataTypes) => {
  const Articles = Sequelize.define(
    'Articles',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      short_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      is_visible: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: true,
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
      tableName: 'article',
      timestamps: true,
    }
  );

  return Articles;
};

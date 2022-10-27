module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM,
        values: ['admin', 'content_creator'],
        allowNull: false,
        defaultValue: 'admin',
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
      tableName: 'users',
      timestamps: true,
    }
  );

  return Users;
};

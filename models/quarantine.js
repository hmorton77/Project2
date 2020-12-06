module.exports = function (sequelize, DataTypes) {
  var Employees = sequelize.define("Employees", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100],
      },
    },
    quarantineStart: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100],
      },
    },
    quarantineEnd: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100],
      },
    },
    covidConfirmed: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 100],
      },
    },
    currentCondition: {
      type: DataTypes.STRING,
      defaultValue: "quarantining",
    },
    activeStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.STRING,
      defaultValue: "01/01/2020",
    },
    updatedAt: {
      type: DataTypes.STRING,
      defaultValue: "01/01/2020",
    },
  });
  return Employees;
};

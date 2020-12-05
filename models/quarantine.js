module.exports = function (sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    quarantineStart: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    quarantineEnd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    covidConfirmed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
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
  return Employee;
};

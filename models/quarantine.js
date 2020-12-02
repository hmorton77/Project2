module.exports = function (sequelize, DataTypes) {
  var Quarantine = sequelize.define("employee", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [100],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [100],
      },
    },
    quarantineStart: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [100],
      },
    },
    quarantineEnd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [100],
      },
    },
    covidConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [100],
      },
    },
    currentCondition: {
      type: DataTypes.STRING,
      defaultValue: "quarantining",
    },
    dateRecorded: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    activeStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return Quarantine;
};

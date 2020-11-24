module.exports = function (sequelize, DataTypes) {
  var Quarantine = sequelize.define("Quarantine", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    quarantineStart: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    quarantineEnd: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    covidConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1],
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

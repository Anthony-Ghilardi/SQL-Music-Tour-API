'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ MeetGreet, SetTime }) {
      // Meet and Greets
      Band.hasMany(MeetGreet, {
        foreignKey: 'band_id',
        as: 'meet_greets'
      });

      // Set Times
      Band.hasMany(SetTime, {
        foreignKey: 'band_id',
        as: 'set_times'
      });
    }
  }
  
  Band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // Add more fields as necessary
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  });

  return Band;
};

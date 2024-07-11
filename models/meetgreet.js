'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // This is a belongs to many to one relationship from band.js
  class MeetGreet extends Model {
    static associate({ Band, Event }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // Event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }

  MeetGreet.init({
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }, 
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    } 
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meetGreets',
    timestamps: 'false'
  });
  return MeetGreet;
};
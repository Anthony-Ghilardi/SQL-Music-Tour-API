'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // This belongs to a many to one relationship from band.js
  class SetTime extends Model {
    static associate({ Band, Event, Stage }) {
      // band
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // Event
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // Stage
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  
  SetTime.init({
    event_id: {
      type: DataTypes.INTEGER
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'SetTimes',
    timestamps: 'false'
  });
  return SetTime;
};
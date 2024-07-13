'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, StageEvent, MeetGreet, SetTime }) {
      // Many-to-many relationship with Stage through StageEvent
      Event.belongsToMany(Stage, {
        through: StageEvent,
        foreignKey: 'event_id',
        otherKey: 'stage_id',
        as: 'stages'
      });

      // Meet and Greets
      Event.hasMany(MeetGreet, {
        foreignKey: 'event_id',
        as: 'meet_greets'
      });

      // Set Times
      Event.hasMany(SetTime, {
        foreignKey: 'event_id',
        as: 'set_times'
      });
    }
  }
  
  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });

  return Event;
};

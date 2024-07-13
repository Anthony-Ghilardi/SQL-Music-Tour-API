'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    static associate({ Stage, Event }) {
      // Belongs to Stage
      StageEvent.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stage'
      });

      // Belongs to Event
      StageEvent.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      });
    }
  }

  StageEvent.init({
    stage_event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'StageEvent',
    tableName: 'stageEvents',
    timestamps: false
  });

  return StageEvent;
};

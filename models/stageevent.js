'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    static associate({ Event, Stage }) {
      // Define associations if necessary
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

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, StageEvent, SetTime }) {
      // Many-to-many relationship with Event through StageEvent
      Stage.belongsToMany(Event, {
        through: StageEvent,
        foreignKey: 'stage_id',
        otherKey: 'event_id',
        as: 'events'
      });

      // Set Times
      Stage.hasMany(SetTime, {
        foreignKey: 'stage_id',
        as: 'set_times'
      });
    }
  }
  
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  });

  return Stage;
};

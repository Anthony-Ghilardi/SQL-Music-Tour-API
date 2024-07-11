'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band, Event }) {
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      });
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      });
    }
  }

  MeetGreet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meetGreets',
    timestamps: false
  });

  return MeetGreet;
};

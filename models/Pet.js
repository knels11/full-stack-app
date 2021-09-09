// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

// Instialize Health model (table) by extending off Sequelize's Model class
class Pet extends Model {  static upvote(body, models) {
  return models.Vote.create({
    user_id: body.user_id,
    pet_id: body.pet_id,
  }).then(() => {
    return Pet.findOne({
      where: {
        id: body.pet_id,
      },
      attributes: ["pet_name"],
      include: [
           {
            model: models.User,
            attributes: ["username"],
          },
       
      ],
    });
  });
} 
}

// set up fields and rules for Health model
Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 16]
      }
    },

    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    pet_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    pet_health: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet'
  }
);

module.exports = Pet;
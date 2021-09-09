
// import all models
const Pet = require('./Pet');
const User = require('./User');

// create associations
User.hasMany(Pet, {
    foreignKey: "user_id",
  });
  
  Pet.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
  });

module.exports = { User, Pet };

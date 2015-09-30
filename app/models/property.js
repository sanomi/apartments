var mongoose = require('mongoose');

var propertySchema = mongoose.Schema({
  manager: { type: Mongoose.Schema.ObjectId, ref: 'User', unique: true}
  apartments: [{ type: Mongoose.Schema.ObjectId, ref: 'Apartment', unique: true}]
  address: String,
  name: String
});



module.exports = mongoose.model('Property', propertySchema);

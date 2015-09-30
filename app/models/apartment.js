var mongoose = require('mongoose');

// define the schema for our user model
var apartmentSchema = mongoose.Schema({
  bedrooms: Number,
  apartmentNumber: Number,
  bathrooms: Number,
  tenants: [{ type: Mongoose.Schema.ObjectId, ref: 'User', unique: true}],
  rent: Number,
  squareFootage: Number,
  isAvailable: Boolean
});



module.exports = mongoose.model('Apartment', apartmentSchema);

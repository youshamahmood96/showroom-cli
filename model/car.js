const mongoose = require('mongoose');

// Car Schema
const carSchema = mongoose.Schema({
  modelNumber: {type:Number},
  vehicleType: {type:String},
  enginePower: { type: Number },
  tireSize: { type: Number },
  engineType: { type: String },
},{strict: false});

module.exports = mongoose.model('Car', carSchema);
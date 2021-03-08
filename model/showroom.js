const mongoose = require('mongoose');

// Showroom Schema
const showRoomSchema = mongoose.Schema({
  name:{type:String},
  total: {type:Number,default:0},
  normal: {type:Number,default:0},
  sports: { type: Number,default:0 },
  heavy: { type: Number,default:0 },
  visitors: { type: Number,default:30 },
},{strict: false});


module.exports = mongoose.model('ShowRoom', showRoomSchema);
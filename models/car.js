// const mongoose = require('mongoose');

// const carSchema = new mongoose.Schema({
//   name: { type: String, required: false },
//   description: { type: String, required: false },
//   isLuxury: { type: Boolean, default: false } // ✅ Add this field
// });

// const CARS = mongoose.model("CARS", carSchema);

// module.exports = CARS;

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: false },
  isLuxury: { type: Boolean, default: false }
});

const car = mongoose.model("car", carSchema);

module.exports = car;

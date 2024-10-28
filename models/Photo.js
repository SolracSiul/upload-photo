const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  id_user: { type: String, required: true },
  photo_base64: { type: String, required: true },
});

module.exports = mongoose.model('Photo', PhotoSchema);
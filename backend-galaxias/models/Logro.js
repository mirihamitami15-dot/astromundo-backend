// backend-galaxias/models/Logro.js
const mongoose = require('mongoose');

const logroSchema = new mongoose.Schema({
  juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Juego', 
    required: true
  },
  nombre: { // Nombre del logro
    type: String,
    required: true,
    trim: true
  },
  descripcion: { // Cómo se consigue
    type: String,
    required: true
  },
  secreto: { // Para simular logros ocultos como en Steam
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Logro', logroSchema);
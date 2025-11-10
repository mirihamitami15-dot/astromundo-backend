// models/Juego.js (Modelo GameTracker)
const mongoose = require('mongoose');
const juegoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  plataforma: {
    type: String,
    enum: ['PC', 'PlayStation', 'Xbox', 'Nintendo', 'Móvil', 'Otro'],
    required: true
  },
  estado: {
    type: String,
    enum: ['Pendiente', 'Jugando', 'Completado', 'Abandonado'],
    default: 'Pendiente'
  },
  horasJugadas: { // Requisito: Registrar horas jugadas [cite: 61]
    type: Number,
    default: 0
  },
  fechaAgregado: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Juego', juegoSchema);
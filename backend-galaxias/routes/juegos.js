// routes/juegos.js (Rutas del Sector de Juegos)
const express = require('express');
const router = express.Router();
const Juego = require('../models/Juego'); // Importar el Modelo

// GET /api/juegos - Buscar todos los juegos [cite: 53]
router.get('/', async (req, res) => {
  try {
    // Buscar todos los documentos de juegos en la DB
    const juegos = await Juego.find(); 
    res.status(200).json(juegos);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar juegos: ' + error.message });
  }
});

module.exports = router;
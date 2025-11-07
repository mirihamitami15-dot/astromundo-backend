// routes/reseñas.js (Rutas de Registro de Bitácora)
const express = require('express');
const router = express.Router();
const Reseña = require('../models/Reseña'); // Importar el Modelo Reseña

// POST /api/reseñas - Agregar una nueva reseña (ya creado)
router.post('/', async (req, res) => {
  // ... (código existente para POST) ...
  try {
    const nuevaReseña = new Reseña(req.body);
    const reseñaGuardada = await nuevaReseña.save();
    res.status(201).json(reseñaGuardada);
  } catch (error) {
    res.status(400).json({ message: 'Error al agregar la reseña: ' + error.message });
  }
});

// --- NUEVA RUTA: GET /api/reseñas/:juegoId - Buscar todas las reseñas de un juego ---
router.get('/:juegoId', async (req, res) => {
    try {
        const { juegoId } = req.params; // Captura el ID del juego de la URL

        // Busca reseñas donde el campo juegoId coincida con el ID capturado
        const reseñas = await Reseña.find({ juegoId: juegoId }).sort({ fecha: -1 }); // Ordena por fecha descendente

        res.status(200).json(reseñas);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar registros de bitácora: ' + error.message });
    }
});

module.exports = router;
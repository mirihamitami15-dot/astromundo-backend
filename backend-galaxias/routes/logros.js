// backend-galaxias/routes/logros.js
const express = require('express');
const router = express.Router();
const Logro = require('../models/Logro'); // Importar el Modelo Logro

// GET /api/logros/:juegoId - Buscar todos los logros de un juego
router.get('/:juegoId', async (req, res) => {
    try {
        const { juegoId } = req.params; 

        // Busca logros donde el campo juegoId coincida con el ID capturado
        const logros = await Logro.find({ juegoId: juegoId }).sort({ nombre: 1 }); 

        res.status(200).json(logros);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar logros.' });
    }
});

module.exports = router;
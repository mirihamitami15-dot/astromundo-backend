// routes/reseñas.js (Rutas de Registro de Bitácora - FINAL)
const express = require('express');
const router = express.Router();
const Reseña = require('../models/Reseña'); // Asegúrate de que el modelo esté correcto

router.post('/', async (req, res) => {
    
    //console.log('Petición POST de Reseña recibida. Cuerpo:', req.body); // Descomentar para debug
    
    try {
        const nuevaReseña = new Reseña(req.body); 
        const reseñaGuardada = await nuevaReseña.save();
        
        // Respuesta de éxito
        res.status(201).json(reseñaGuardada);
    } catch (error) {
        // Captura errores de validación de Mongoose (código 400)
        console.error('ERROR AL GUARDAR LA RESEÑA:', error.message);
        res.status(400).json({ 
            message: 'Error al agregar la reseña: ' + error.message,
            details: error 
        });
    }
});

// 2. GET /api/reseñas/:juegoId - Buscar todas las reseñas de un juego
router.get('/:juegoId', async (req, res) => {
    try {
        const { juegoId } = req.params; 

        // Busca reseñas donde el campo juegoId coincida con el ID capturado
        // El populate es opcional, pero ayuda a asegurar que el ID sea válido.
        const reseñas = await Reseña.find({ juegoId: juegoId }).sort({ fecha: -1 });

        res.status(200).json(reseñas);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar registros de bitácora: ' + error.message });
    }
});

module.exports = router;
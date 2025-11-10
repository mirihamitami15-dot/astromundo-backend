// backend-galaxias/routes/logros.js
const express = require('express');
const router = express.Router();
const Logro = require('../models/Logro'); // Importar el Modelo Logro

// POST /api/logros - Agregar un nuevo logro (NECESARIO PARA INSERTAR DATOS)
router.post('/', async (req, res) => {
    try {
        const nuevoLogro = new Logro(req.body); 
        const logroGuardado = await nuevoLogro.save(); 
        res.status(201).json(logroGuardado);
    } catch (error) {
        console.error('ERROR AL GUARDAR LOGRO:', error.message);
        res.status(400).json({ message: 'Error al agregar el logro: ' + error.message });
    }
});

// DELETE /api/logros/:juegoId - Elimina todos los logros de un juego
router.delete('/:juegoId', async (req, res) => {
    try {
        const { juegoId } = req.params; 

        // Borra todos los documentos que coincidan con el juegoId
        const resultado = await Logro.deleteMany({ juegoId: juegoId }); 

        res.status(200).json({ 
            message: `Logros eliminados con éxito. Total: ${resultado.deletedCount}`,
            deletedCount: resultado.deletedCount
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar logros.' });
    }
});

// GET /api/logros/:juegoId - Buscar todos los logros de un juego (NECESARIO PARA EL FRONTEND)
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
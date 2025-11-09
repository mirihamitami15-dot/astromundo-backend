// server.js (Actualizado)

// Cargar variables de entorno del archivo .env
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Importar Mongoose

const app = express();

app.use(cors());
app.use(express.json());


// 4. Importar Rutas
const juegosRouter = require('./routes/juegos');
const reviewsRouter = require('./routes/reviews'); 

// 5. Definir la URL base para las rutas
app.use('/api/juegos', juegosRouter); 
app.use('/api/reviews', reviewsRouter); 


// --- CONEXIÓN A MONGOOSE ---
const MONGODB_URI = process.env.MONGO_URI; 

mongoose.connect(MONGODB_URI)
  .then(() => {
    // Si la conexión es exitosa, iniciamos el servidor
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`📡 Conexión a DB Atlas exitosa.`);
      console.log(`Servidor activo en el puerto ${PORT} 🚀`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar a MongoDB Atlas:', error.message);
  });

// Ruta de prueba (Mundo Galáctico)
app.get('/', (req, res) => {
  res.send('🌌 Servidor GameTracker iniciado en la galaxia. 🚀');
});










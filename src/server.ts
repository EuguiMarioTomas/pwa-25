import app from './apps';
import connectDB from '../config/db';
import dotenv from 'dotenv';


dotenv.config(); // Carga las variables de entorno desde el archivo .env

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDB(); // Conecta a la base de datos MongoDB
    app.listen(PORT, () => {
      console.log('Servidor corriendo en http://localhost:${PORT}');
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1); // Termina el proceso si hay un error al iniciar el servidor
  }
};

startServer();
// Este archivo es el punto de entrada de la aplicación. Configura el servidor Express, conecta a la base de datos y maneja errores al iniciar el servidor.
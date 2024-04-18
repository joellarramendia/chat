import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectToMongoDB from './config/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // Middleware para parsear el body de las peticiones


// Montar las rutas de autenticación
app.use('/api/auth', authRoutes);

/*app.get('/', (req, res) => {
    res.send('Hello World');
  });*/

app.listen(PORT, () => {
    connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});

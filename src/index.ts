import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import barRoutes from './routes/barRoutes';
import livraisonRoutes from './routes/livraisonRoutes';
import authRoutes from './routes/authRoutes';
import { setupSwagger } from './swagger';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/bars', barRoutes);
app.use('/livraisons', livraisonRoutes);

setupSwagger(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

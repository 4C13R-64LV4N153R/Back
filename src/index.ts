import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import barRoutes from './routes/barRoutes';
import livraisonRoutes from './routes/livraisonRoutes';
import authRoutes from './routes/authRoutes';
import adminRoutes from './routes/adminRoutes';
import { setupSwagger } from './swagger';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/bars', barRoutes);
app.use('/livraisons', livraisonRoutes);
app.use('/admin', adminRoutes);

setupSwagger(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

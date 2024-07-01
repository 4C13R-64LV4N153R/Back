const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes.js');
require('dotenv').config();

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

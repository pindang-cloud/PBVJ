const express = require('express');
const userRoutes = require('./routes/usersRoute');
const app = express();

// Middleware
app.use(express.json());

// Rute API
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server berjalan di port : ${PORT}`));

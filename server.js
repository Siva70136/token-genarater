const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { port } = require('./config/config');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors(
    {
        Access-Control-Allow-Origin: 'https://dashui-alpha.vercel.app'

    }
));
app.use(bodyParser.json());

// Routes
app.use('/', authRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

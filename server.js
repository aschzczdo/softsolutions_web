import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import sendMailHandler from './api/sendmail.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json()); // This is the modern way to include body-parser functionality for JSON


// Define routes
app.post('/api/sendmail', sendMailHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

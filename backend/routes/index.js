// index.js
import express from 'express';
import connectDB from './config/db.js';

const app = express();
app.use(express.json());

// Example routes
app.get('/api/health', (req, res) => res.status(200).send('OK'));
app.get('/api/users', (req, res) => res.status(200).json([]));

// Only start server if not in test
if (process.env.NODE_ENV !== 'test') {
  app.listen(3001, async () => {
    await connectDB();
    console.log('Server running on port 3001');
  });
}

module.exports= app;

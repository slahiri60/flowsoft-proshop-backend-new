import express from 'express';
import products from './data/products.js';
import cors from 'cors';
import dotenv from 'dotenv';
const port = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => console.log(`Server running on port ${port}`));

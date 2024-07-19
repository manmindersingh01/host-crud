import express from 'express';
import mongoose from 'mongoose';
import Card from '../db.js';  // Ensure the path and extension are correct

const route = express.Router();

// Log each request for debugging
route.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

route.post('/submit', (req, res) => {
  const newCard = new Card(req.body);
  newCard.save()
    .then(() => res.status(200).json({ message: 'Data saved successfully' }))
    .catch(err => {
      console.error('Error saving data:', err);
      res.status(400).json({ error: err.message });
    });
});

// route.get('/cards', async (req, res) => {
//   // Card.find()
//   //   .then(cards => res.status(200).json(cards))
//   //   .catch(err => {
//   //     console.error('Error fetching cards:', err);
//   //     res.status(400).json({ error: err.message });
//   //   });

//   const resp = await Card.find();
//   console.log("hello world");
//   console.log(resp);
//   res.json(resp);

// });

route.get('/list', async (req, res) => {
  const list = await Card.find();
  res.json(list);
})

route.get('/get/:id', (req, res) => {
  Card.findById(req.params.id)
    .then(card => res.status(200).json(card))
    .catch(err => {
      console.error('Error fetching card by ID:', err);
      res.status(400).json({ error: err.message });
    });
});

route.put('/update/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(card => res.status(200).json(card))
    .catch(err => {
      console.error('Error updating card:', err);
      res.status(400).json({ error: err.message });
    });
});

route.delete('/cards/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ message: 'Card deleted successfully' }))
    .catch(err => {
      console.error('Error deleting card:', err);
      res.status(400).json({ error: err.message });
    });
});

export default route;

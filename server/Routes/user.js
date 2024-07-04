import express from 'express';
import Card from '../db.js';  // Ensure the path and extension are correct

const route = express.Router();

route.post('/submit', (req, res) => {
  const newCard = new Card(req.body);
  newCard.save()
    .then(() => res.status(200).json({ message: 'Data saved successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Get the list of all cards
route.get('/cards', (req, res) => {
  Card.find()
    .then(cards => res.status(200).json(cards))
    .catch(err => res.status(400).json({ error: err.message }));
});

route.get('/get/:id', (req, res) => {
  Card.findById(req.params.id)
    .then(card => res.status(200).json(card))
    .catch(err => res.status(400).json({ error: err.message }));
});

route.put('/update/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(card => res.status(200).json(card))
    .catch(err => res.status(400).json({ error: err.message }));
});

route.delete('/cards/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ message: 'Card deleted successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

export default route;

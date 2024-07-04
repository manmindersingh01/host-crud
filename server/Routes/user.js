const express = require('express');
const route = express.Router();
const card = require('../db.js')

route.post('/submit', (req, res) => {
  const newCard = new card(req.body);
  newCard.save()
    .then(() => res.status(200).json({ message: 'Data saved successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});
// get the list of all users
route.get('/cards', (req, res) => {
  card.find()
    .then(cards => res.status(200).json(cards))
    .catch(err => res.status(400).json({ error: err.message }));
});

route.get('/get/:id', (req, res) => {
  card.findById(req.params.id)
    .then(card => res.status(200).json(card))
    .catch(err => res.status(400).json({ error: err.message }));
})
route.put('/update/:id', (req, res) => {
  card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(card => res.status(200).json(card))
    .catch(err => res.status(400).json({ error: err.message }));
})
route.delete('/cards/:id', (req, res) => {
  card.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ message: 'Card deleted successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});
module.exports = route;
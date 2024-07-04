const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://bewithme2407:IFlLcypNB9JMtk7t@mern-blog.iggxm3g.mongodb.net/internShip', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const cardSchema = new mongoose.Schema({
  name: String,
  cardNumber: String,
  expMonth: String,
  expYear: String,
  cvc: String,
});

const Card = mongoose.model('Card', cardSchema);
// export 
module.exports = Card;
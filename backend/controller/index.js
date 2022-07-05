import pusher from './pusher.js';
import {mongoclient, dburl} from './mongodb.js';
const home = async (req, res) => {
  res.send('Welcome,backend for app nudges');
};
const product = async (req, res) => {
  pusher.trigger('my-channel', 'product', {
    id: req.body.id,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    images: req.body.images,
    options: req.body.options,
    avgRating: req.body.avgRating,
    ratings: req.body.ratings,
    price: req.body.price,
    oldPrice: req.body.oldPrice,
    quantity: req.body.quantity,
    target: req.body.target,

    nudge: req.body.nudge,
  });
};
const test_connection = async (req, res) => {
  mongoclient(() => {
    console.log('Connection established to', dburl);
    res.send('Connected to database');
  });
};
export {home, product, test_connection};

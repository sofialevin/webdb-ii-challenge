const express = require('express');

const db = require('./data/db-config.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars', error: err });
    });
});

server.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve car', error: err });
    });
});

server.post('/', (req, res) => {
  const carData = req.body;
  db('cars').insert(carData)
    .then(ids => {
      db('cars').where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data", error: err });
    });
});

module.exports = server;
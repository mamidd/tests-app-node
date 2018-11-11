const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/json', (req, res) => {
  res.status(404).send({
    error: 'Page not found!'
  });
});

app.get('/jsonName', (req, res) => {
  res.status(404).send({
    error: 'Page not found!',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
      {
        name: 'Mario',
        age: 28
      },
      {
        name: 'Angela',
        age: 26
      }
    ]);

});


app.listen(3000);
module.exports.app = app;

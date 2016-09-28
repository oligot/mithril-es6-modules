import express from 'express';
import m from 'mithril';
import render from 'mithril-node-render';
import Hello from './hello.js';

const PORT = process.env.PORT || 8080;

var app = express();
app.get('/', (req, res) => {
  var componentHTML = render(Hello);
  res.send('<!doctype html><body>' + componentHTML);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

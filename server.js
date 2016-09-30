import fs from 'fs';
import express from 'express';
import morgan from 'morgan';
import cheerio from 'cheerio';
import m from 'mithril';
import render from 'mithril-node-render';
import Hello from './hello.js';

const PORT = process.env.PORT || 8080;

var app = express();
app.use(morgan('dev'));
app.get('/', (req, res) => {
  var componentHTML = render(Hello.view(null, { name: 'server' }));
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      res.status(500).end(err);
    } else {
      var $ = cheerio.load(data);
      $('#container').append(componentHTML);
      res.send($.html());
    }
  });
});
app.use(express.static('.'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

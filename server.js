const express = require('express');

const app = express();

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  console.log('se hizo consulta de index');
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Listening 3000 port'));

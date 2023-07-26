const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello World!!!');
});

app.listen(3000, () => console.log('Api rodando em http://localhost:3000'))
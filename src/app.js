import { openDb } from './configDB.js';
import { createTable, insertPessoa, updatePessoa } from './controller/pessoa.js';
import express from 'express';
const app = express();

app.use(express.json());
createTable();

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.post('/pessoa', (req, res) => {
  insertPessoa(req.body);
  res.json({
    statusCode: 200,
  });
});

app.put('/pessoa', (req, res) => {
  if (req.body && !req.body.id) {
    res.json({
      statusCode: 400,
      msg: 'Você precisa informar um id',
    });
  } else {
    updatePessoa(req.body);
    res.json({
      statusCode: 200,
    });
  }
});

app.listen(3000, () => console.log('Api rodando em http://localhost:3000'));

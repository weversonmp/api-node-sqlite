import { openDb } from './configDB.js';
import express from 'express';

const app = express();
app.use(express.json());

openDb();

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.post('/pessoa', (req, res) => {
  console.log(req.body)
  res.json({
    "statusCode": 200
  })
});

app.listen(3000, () => console.log('Api rodando em http://localhost:3000'))
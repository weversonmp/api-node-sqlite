import { openDb } from '../configDB.js';

export async function createTable() {
  openDb().then((db) => {
    db.exec('CREATE TABLE IF NOT EXISTS Pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)');
  });
}

export async function insertPessoa(pessoa) {
  openDb().then((db) => {
    db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
  });
}

export async function updatePessoa(pessoa) {
  openDb().then((db) => {
    db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
  });
}

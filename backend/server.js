const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // senha do MySQL
    database: 'musicas_db'
});

db.connect(err => {
    if (err) {
        console.log("Erro:", err);
    } else {
        console.log("Conectado ao banco!");
    }
});

app.get('/musicas', (req, res) => {
    db.query('SELECT * FROM musicas', (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});


// Criar música
app.post('/musicas', (req, res) => {
    const { musica, artista, album, ano, genero } = req.body;

    if (!musica || !artista || !album || !ano || !genero) {
        return res.status(400).send("Todos os campos são obrigatórios");
    }

    if (isNaN(ano)) {
        return res.status(400).send("Ano deve ser número");
    }

    db.query(
        'INSERT INTO musicas (musica, artista, album, ano, genero) VALUES (?, ?, ?, ?, ?)',
        [musica, artista, album, Number(ano), genero],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send("Música criada!");
        }
    );
});

// Deletar música
app.delete('/musicas/:id', (req, res) => {
    const { id } = req.params;

    db.query(
        'DELETE FROM musicas WHERE id = ?',
        [id],
        (err) => {
            if (err) return res.send(err);
            res.send("Música deletada!");
        }
    );
});

// Atualizar música
app.put('/musicas/:id', (req, res) => {
    const { id } = req.params;
    const { musica, artista, album, ano, genero } = req.body;

    if (!musica || !artista || !album || !ano || !genero) {
        return res.status(400).send("Todos os campos são obrigatórios");
    }

    if (isNaN(ano)) {
        return res.status(400).send("Ano deve ser número");
    }

    db.query(
        'UPDATE musicas SET musica = ?, artista = ?, album = ?, ano = ?, genero = ? WHERE id = ?',
        [musica, artista, album, Number(ano), genero, id],

        (err) => {
            if (err) return res.status(500).send("Erro no servidor");
            res.send("Música atualizada!");
        }
    );
});

// Buscar uma música 
app.get('/musicas/:id', (req, res) => {
    const { id } = req.params;

    db.query(
        'SELECT * FROM musicas WHERE id = ?',
        [id],
        (err, result) => {
            if (err) return res.send(err);
            res.json(result[0]);
        }
    );
});

const PORTA_SERVIDOR = 3001;

app.listen(PORTA_SERVIDOR, () => { 
    console.log(`Servidor rodando na porta ${PORTA_SERVIDOR}`);
});
const { agregarUsuario } = require('./consultas.js');

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, console.log("Servidor Encendido"));

app.post("/usuarios", async (req, res) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        const result = await agregarUsuario(email, password, rol, lenguage);
        res.json(result);
    } catch(error) {
        res.status(500).send(error);
    }
})
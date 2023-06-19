require("dotenv").config();

const { verificarCredenciales, agregarUsuario, obtenerUsuario } = require('./consultas.js');

const jwt = require('jsonwebtoken');

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, console.log("Servidor Encendido"));

app.post("/usuarios", async (req, res) => {
    try {
        const usuario = req.body;
        await agregarUsuario(usuario);
        res.status(201).send("Usuario registrado con éxito");
    } catch(error) {
        res.status(500).send(error);
    }
})

app.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        await verificarCredenciales(email, password);
        const token = jwt.sign({ email }, process.env.SECRET_KEY);
        console.log(`Token generado para ${email}`);
        res.send(token);
    } catch(error) {
        res.status(500).send(error);
    }
})

app.get("/usuarios", async (req, res) => {
    try {
        const Authorization = req.header("Authorization");
        const token = Authorization.split("Bearer ")[1];
        jwt.verify(token, process.env.SECRET_KEY);
        const { email } = jwt.decode(token);
        result = await obtenerUsuario(email);
        res.json(result);
    } catch(error) {
        res.status(error.code || 500).send(error);
    }    
})

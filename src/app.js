import express from 'express';

const app = express();

app.use(express.json());

const clientes = [
    {id: 1, cliente: 'moises', condicao: 'rico'},
    {id: 2, cliente: 'jose', condicao: 'pobre'},
    {id: 3, cliente: 'adao', condicao: 'rico'},
];

function buscarClientesPorId(id) {
    return clientes.filter(cliente => cliente.id == id)
};

function buscarIdexCliente(id) {
    return clientes.findIndex(cliente => cliente.id == id)
};

app.get('/', (req, res) => {
    res.send('GET BOMBANDO MANO')
});

app.get('/clientes', (req, res) => {
    res.status(200).send(clientes)
});

app.get('/clientes/:id', (req, res) => {
    res.status(200).json(buscarClientesPorId(req.params.id))
});

app.post('/clientes', (req, res) => {
    clientes.push(req.body)
    res.status(201).send('cadastrado com sucesso!')
});

app.put('/clientes/:id', (req, res) => {
    let index = buscarIdexCliente(req.params.id)
    clientes[index].cliente = req.body.cliente
    clientes[index].condicao = req.body.condicao
    res.json(clientes)
});

app.delete('/clientes/:id', (req, res) => {
    let index = buscarIdexCliente(req.params.id)
    clientes.splice(index, 1)
    res.send('sucesso total')
});

export default app;

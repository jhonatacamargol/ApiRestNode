import express from 'express';
import ClienteController from './app/controllers/ClienteController.js';

const app = express();
app.use(express.json());

//rotas
app.get('/clientes', ClienteController.index);
app.get('/clientes/:id', ClienteController.show);
app.post('/clientes', ClienteController.store);
app.put('/clientes/:id', ClienteController.update);
app.delete('/clientes/:id', ClienteController.delete);

export default app;

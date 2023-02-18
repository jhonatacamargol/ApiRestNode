import conection from "../database/conection.js"

class ClienteController {

    index(req, res) {
        const sql = "select * from clientes;"
        conection.query(sql, (error, result) => {
            if (error) {
                res.status(404).json({'error': error})
            } else {
                res.status(200).json(result)
            }
        })
    };
    show(req, res) {
        const id = req.params.id
        const sql = "select * from clientes where id=?;"
        conection.query(sql, id, (error, result) => {
            const linha = result[0]
            if (error) {
                res.status(404).json({'error': error})
            } else {
                res.status(200).json(linha)
            }
        })
    };
    store(req, res) {
        const cliente = req.body
        const sql = "insert into clientes set ?;"
        conection.query(sql, cliente, (error, result) => {
            if (error) {
                res.status(404).json({ "error": error})
            } else {
                res.status(201).json(result)
            }
        })
    };
    update(req, res) {
        const id = req.params.id
        const cliente = req.body
        const sql = "update clientes set ? where id=?;"
        conection.query(sql, [cliente, id], (error, result) => {
            const linha = req.params.id
            if (error) {
                res.status(404).json({'error': error})
            } else {
                res.status(200).json(result)
            }
        })
    };
    delete(req, res) {
        const id = req.params.id
        const sql = "delete from clientes where id=?;"
        conection.query(sql, id, (error, result) => {
            const linha = req.params.id
            if (error) {
                res.status(404).json({'error': error})
            } else {
                res.status(200).json(result)
            }
        })
    };

};

export default new ClienteController()
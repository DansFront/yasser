const mysql = require('../mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.show = async (req, res, next) => {
    try {
        query = "SELECT * FROM USERS";
        if(req.body.ID > 0) 
            query += " WHERE ID = ?";

        const result = await mysql.execute(query, [req.body.ID]);

        const response = result.map(index => {
            return {
                id : index.ID,
                name: index.NAME,
                mail: index.MAIL
            }
        });

        return res.status(200).send(response);
    }
    catch(error) {
        return res.status(500).send({ mensagem: error });
    }
}

exports.created = async (req, res, next) => {
    try {
        query = `INSERT INTO USERS (NAME, MAIL, PASSWORD) VALUES (?,?,?)`;

        await mysql.execute(query, [
            req.body.NAME,
            req.body.MAIL,
            bcrypt.hashSync(req.body.PASSWORD, 10)
        ]);

        const response = {
            nome: req.body.NAME,
            mail: req.body.MAIL
        };

        return res.status(200).send(`Usuário foi cadastrado com sucesso`);
    } 
    catch (error) {
        return res.status(500).send({ mensagem: error });
    }
}

exports.update = async (req, res, next) => {
    try {
        query = `UPDATE USERS 
                    SET NAME = ?, 
                        MAIL = ?,  
                        PASSWORD = ?
                    WHERE ID = ?`;

        await mysql.execute(query, [
            req.body.NAME,
            req.body.MAIL,
            bcrypt.hashSync(req.body.PASSWORD, 10),
            req.body.ID,
        ]);

        const response = {
            nome: req.body.NAME,
            mail: req.body.MAIL,
            id: req.body.ID
        };

        return res.status(200).send(response);
    } 
    catch (error) {
        return res.status(500).send({ mensagem: error });
    }
}

exports.delete = async (req, res, next) => {
    try {
        query = `DELETE FROM USERS WHERE ID = ?`;
        await mysql.execute(query, [req.body.id]);
        return res.status(200).send("Cliente:" +req.body.id+ "foi excluido com Sucesso!");
    } 
    catch (error) {
        return res.status(500).send({ mensagem: error });
    }
}

exports.login = async (req, res, next) => {

    try {
        const query = `SELECT * FROM USERS WHERE MAIL = ?`;
        var results = await mysql.execute(query, [req.body.mail]);

        if (results.length < 1) {
            return res.status(401).send({ message: 'Falha na autenticação 1' })
        }
        if (await bcrypt.compareSync(req.body.password, results[0].PASSWORD)) {

            const token = 
            jwt.sign(
                { id: results[0].ID, mail: results[0].MAIL },
                process.env.JWT_KEY,
                { expiresIn: "1h" }
            );

            console.log({ token });

            return res.status(200).send({
                message: 'Autenticado com sucesso',
                token: token
            });
        }
        return res.status(401).send({ message: 'Falha na autenticação 2' })

    } catch (error) {
        return res.status(500).send({ message: 'Falha na autenticação 3' });
    }
};
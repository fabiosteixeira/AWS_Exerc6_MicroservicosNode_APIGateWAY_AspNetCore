const Venda = require('../model/venda')
const http = require('http')
const path = '/produtos/vendas/';
let options = {
  hostname: 'localhost',
  port: 8000,
  path: '',
  method: 'GET',
}

let vendas = [];

exports.get = (req, res, next) => {
    if (vendas.length > 0)
        res.status(200).send(vendas)
    else
        res.status(200).send("Não existem vendas inseridas");
};

exports.getById = (req, res, next) => {
    res.status(200).send("Retorna uma determinada vendas");  
};

exports.post = (req, res, next) => {

    listaProdutos = req.body.listaProdutos;    

    venda = new Venda(
        req.body.id,
        req.body.valorVenda,
        []
    )
    listaProdutos.forEach(item => {
        venda.listaProdutos.push(item);

        options.path = path + item.id;
        console.log(options);
        const req = http.request(options, (res) => {
            console.log(`statusCode: ${res.statusCode}`)
        })
          
        req.on('error', (error) => {
            console.error(error)
        })          

        req.end();

    });
    vendas.push(venda);

    res.status(200).send("Venda cadastrada!");     
};

exports.put = (req, res, next) => {
    res.status(200).send("Atualiza uma venda");     
};

exports.delete = (req, res, next) => {
    res.status(200).send("Deleta uma venda");
};
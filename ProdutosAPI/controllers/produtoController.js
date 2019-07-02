const Produto = require('../model/produto')

let produtos = [
  new Produto(1, 'Martelo', 'Martelo de cabo longo', 'Ferramentas', 30),
  new Produto(2, 'Furadeira', 'Furadeira de alto impacto', 'Ferramentas', 280),
  new Produto(3, 'Batom', 'Batom vermelho', 'Cosméticos', 45),
  new Produto(4, 'Celular', 'Nokia 7320', 'Eletrônicos', 100)
]

exports.get = (req, res, next) => {
  res.status(200).send(produtos);
};

exports.getById = (req, res, next) => {
  var achou = false;
  produtos.forEach(function(produto){
      if (produto.id == req.params.id) {
          achou = true;
          res.status(200).send(produto)            
      }            
  })
  if (!achou)
      res.status(200).send('Produto não encontrado!');    
};

exports.post = (req, res, next) => {
  produto = new Produto(req.body.id, 
                          req.body.nome,
                          req.body.descricao,
                          req.body.categoria, 
                          req.body.preco)
  produtos.push(produto)
  res.status(200).send('Produto adicionado com sucesso!');
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  var achou = false;
  for (i = 0; i < produtos.length; i++) { 
      if (produtos[i].id == id) {
          produtos[i].nome = req.body.nome;
          produtos[i].descricao = req.body.descricao;
          produtos[i].categoria = req.body.categoria;
          produtos[i].preco = req.body.preco;
          achou = true;
          res.status(200).send(`Produto id ${id} atualizado com sucesso!`);
      }                    
  }
  if (!achou) 
      res.status(200).send('Produto não encontrada!');       
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  var achou = false;
  for (i = 0; i < produtos.length; i++) { 
      if (produtos[i].id == id) {
          produtos.splice(i, 1)
          i--
          achou = true;
          res.status(200).send(`Produto id ${id} excluído com sucesso!`);
      }                    
  }
  if (!achou) 
      res.status(200).send('Produto não encontrado!'); 
};

exports.deleteByVendas = (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  var achou = false;
  for (i = 0; i < produtos.length; i++) { 
      if (produtos[i].id == id) {
          produtos.splice(i, 1)
          i--
          achou = true;
          res.status(200).send(`Venda do produto id ${id} finalizada com sucesso!`);
      }                    
  }
  if (!achou) 
      res.status(200).send('Produto não encontrado para venda!'); 
};
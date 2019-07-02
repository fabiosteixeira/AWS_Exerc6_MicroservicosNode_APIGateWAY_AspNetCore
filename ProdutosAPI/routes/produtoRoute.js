const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController')

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.get('/vendas/:id', controller.deleteByVendas);

module.exports = router;
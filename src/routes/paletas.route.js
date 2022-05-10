const express = require('express');
const router = express.Router();
const paletasController = require('../controllers/paletas.controller');
const controllerCarinho = require('../controllers/carrinho.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} = require('../middlewares/paleta.middleware');

// Rotas para Swagger
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Rota para listar todas as paletas
router.get('/all-paletas',paletasController.findAllPaletasController
);

// Rota para lista uma palea pelo seu ID
router.get(
  '/one-paleta/:id',
  validId,
  paletasController.findPaletaByIdController,
);

// Rota para criar uma paleta
router.post(
  '/create-paleta',
  validObjectBody,
  paletasController.createPaletaController,
);

// Usaremos o PUT para atualizar todo o recurso, o PATCH pode ser usado para atualizar partes de um registro
router.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  paletasController.updatePaletaController,
);

// Rota para deletar uma paleta pelo seu ID
router.delete(
  '/delete-paleta/:id',
  validId,
  paletasController.deletePaletaController,
);

router.get('/all-carrinho', controllerCarinho.findAllCarrinhoController);
router.post('/create-carrinho', validObjectBodyCarrinho, controllerCarinho.createManyItemsCarrinhoController);
router.delete(
  '/finish-carrinho',
  controllerCarinho.deleteAllItemsCarrinhoController,
);

module.exports = router;
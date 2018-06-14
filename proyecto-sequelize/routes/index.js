var express = require('express');
var router = express.Router();
var db = require('../models');
var Cliente = db.Cliente
var Categoria = db.Categoria
var Producto = db.Producto

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cliente', (req, res) => {
  Cliente.findAll().then((clientes) => {
    res.send(clientes)
  })
})

router.get('/cliente/name/:nombre', (req, res) => {
  Cliente.findOne({where: {nombre: req.params.nombre}}).then((cliente) => {
    res.send(cliente)
  })
})

router.get('/cliente/:clienteId', (req, res) => {

  Cliente.findById(req.params.clienteId).then((cliente) => {
    res.send(cliente)
  })
})

router.get('/cliente/:clienteId/productos', (req, res) => {

  Cliente.findById(req.params.clienteId).then((cliente) => {

    cliente.getProductos({ include: [ {all: true} ] }).then( resultado => {
        res.send(resultado)
    })
  })
})

router.post('/categoria', (req, res) => {

  Categoria.build({nombre: req.body.nombre}).save().then((result) => {
    res.send(result)
  })
})

router.put('/categoria/:categoriaId', function(req, res, next) {
	
 
  Categoria.update({ nombre: req.body.nombre},{ where: { id: req.params.categoriaId } })
  .then(() => {
    res.send({})
  })
});

router.put('/producto/:productoId', function(req, res, next) {
	
 
  Producto.update({ nombre: req.body.nombre, categoriaId: req.body.categoriaId, stock: req.body.stock},{ where: { id: req.params.productoId } })
  .then(() => {
    res.send({})
  })
});

module.exports = router;

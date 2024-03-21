const express = require('express');
const router = express.Router();
const ProductItem=require('../model/product')

//===========================getall product====================================
router.get('', async (req, res) => {
  const productsList = await ProductItem.getAll();
  res.send(productsList);
})

//===========================add product=======================================

router.post('/create',(req, res, next) => {
  if(req.body && req.body.price < 1000){
      next();
  }
  else{
      throw new Error("Too much price")
  }
}, async (req, res) => {
  const addedProduct = await ProductItem.create(req.body);
  res.send(addedProduct)
});

router.get('/:id', async (req, res) => {
  const productOne = await ProductItem.getById(req.params.id);
  res.send(productOne)
}
);

//======================update product on the given id========================

router.put('/:id', async (req, res) => {
  const productUpdateOne = await ProductItem.update(req.params.id, req.body);
  res.send(productUpdateOne)
});

//======================delete product on the given id========================

router.delete('/:id', async (req, res) => {
  const productDeleteOne = await ProductItem.delete(req.params.id);
  res.send(productDeleteOne)
})

module.exports = router;
const router = require('express').Router();

const Product = require('../models/Product');

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.patch('/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(400).json(e.message);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Category = require('../models/Category');

// =======================
// ADD PRODUCT
// =======================
router.post('/', async (req, res) => {
  try {
    const { name, categoryId } = req.body;

    if (!name || !categoryId) {
      return res.status(400).json({
        error: 'Product name and categoryId are required'
      });
    }

    const product = await Product.create({
      name,
      categoryId
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error('ADD PRODUCT ERROR:', error);
    return res.status(500).json({ error: error.message });
  }
});

// =======================
// GET PRODUCTS (SERVER-SIDE PAGINATION)
// =======================
router.get('/', async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const size = Number(req.query.size) || 10;

    const limit = size;
    const offset = (page - 1) * size;

    const products = await Product.findAll({
      include: {
        model: Category,
        attributes: ['id', 'name']
      },
      order: [['id', 'ASC']], // ✅ IMPORTANT for correct pagination
      limit,
      offset
    });

    return res.json(products);
  } catch (error) {
    console.error('GET PRODUCTS ERROR:', error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;

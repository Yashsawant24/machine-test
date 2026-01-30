const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

router.post('/', async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
});

router.get('/', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

router.put('/:id', async (req, res) => {
  await Category.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Category updated successfully' });
});


router.delete('/:id', async (req, res) => {
  await Category.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Category deleted successfully' });
});


module.exports = router;

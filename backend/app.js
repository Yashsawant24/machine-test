const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Backend running on port 3000'));
});

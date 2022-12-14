require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const productsRouter = require('./routers/products');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', productsRouter);

const serverStart = async () => {
  try {
    await mongoose
      .connect('mongodb+srv://riot:riot@cluster0.dcz7edz.mongodb.net', {
        useNewUrlParser: true,
      })
      .then(() => console.log('db: ok'))
      .catch(() => console.log('db: bad'));
    app.listen(8080, () => console.log('server started: ok'));
  } catch (e) {
    console.log(e);
  }
};

serverStart();

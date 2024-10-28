//@ts-nocheck
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const photoRoutes = require('./routes/photoRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/uploadFiles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Conectado ao MongoDB');
});

app.use(bodyParser.json({ limit: '40mb' })); 
app.use(cors()); 
app.use(bodyParser.json());
app.use('/photos', photoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

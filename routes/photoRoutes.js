const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');

router.post('/upload', async (req, res) => {
  const { id_user, photo_base64 } = req.body;
  

  try {
    const newPhoto = new Photo({ id_user, photo_base64 });
    await newPhoto.save();
    res.status(201).json({ message: 'Foto salva com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar a foto.' });
  }
});

router.get('/:id_user', async (req, res) => {
  const { id_user } = req.params;

  try {
    const photo = await Photo.findOne({ id_user });
    if (photo) {
      res.status(200).json(photo);
    } else {
      res.status(404).json({ error: 'Foto não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar a foto.' });
  }
});

module.exports = router;

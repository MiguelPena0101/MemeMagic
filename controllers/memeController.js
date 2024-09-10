const db = require('../models');

exports.getAllMemes = async (req, res) => {
  try {
    const memes = await db.Meme.findAll();
    res.render('home', { memes });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createMeme = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    await db.Meme.create({ title, imageUrl });
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
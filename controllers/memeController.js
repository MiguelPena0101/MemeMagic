const db = require('../models');

exports.getAllMemes = async (req, res) => {
  try {
    const memes = await db.Meme.findAll({ include: [db.User, db.Template] });
    res.render('home', { memes, loggedIn: !!req.session.userId });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createMeme = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'You must be logged in to save memes.' });
  }
  try {
    const { title, imageUrl } = req.body;
    await db.Meme.create({ title, imageUrl, userId: req.session.userId });
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

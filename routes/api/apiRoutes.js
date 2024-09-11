const express = require('express');
const bcrypt = require('bcrypt');
const { Meme, User, Template } = require('../../models');
const router = express.Router();

// Register a new user
router.post('/users/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });
    req.session.userId = newUser.id;
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// User login
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    req.session.userId = user.id;
    res.json({ message: 'Logged in successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// User logout
router.post('/users/logout', (req, res) => {
  if (req.session.userId) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// GET all memes
router.get('/memes', async (req, res) => {
  try {
    const memes = await Meme.findAll({ include: [User, Template] });
    res.json(memes);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new meme
router.post('/memes', async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'You must be logged in to save memes.' });
  }
  try {
    const newMeme = await Meme.create({
      topText: req.body.topText,
      bottomText: req.body.bottomText,
      imageUrl: req.body.imageUrl,
      userId: req.session.userId,
      templateId: req.body.templateId,
    });
    res.status(201).json(newMeme);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const express = require('express');
const { Meme, User, Template } = require('../../models');
const bcrypt = require('bcrypt');
const router = express.Router();

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
  try {
    const newMeme = await Meme.create({
      topText: req.body.topText,
      bottomText: req.body.bottomText,
      imageUrl: req.body.imageUrl,
      userId: req.session.userId, // Assuming user is logged in and session contains userId
      templateId: req.body.templateId,
    });
    res.status(201).json(newMeme);
  } catch (err) {
    res.status(500).json(err);
  }
});


// POST register a new user
router.post('/users/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword,
    });
    req.session.userId = newUser.id;
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST login a user
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

// POST logout a user
router.post('/users/logout', (req, res) => {
  if (req.session.userId) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
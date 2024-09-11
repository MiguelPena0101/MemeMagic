const express = require('express');
const { Meme, Template } = require('../models');
const router = express.Router();

// GET home page
router.get('/', async (req, res) => {
  try {
    const memeData = await Meme.findAll({
      include: [Template],
      order: [['createdAt', 'DESC']],
    });
    const memes = memeData.map((meme) => meme.get({ plain: true }));
    res.render('home', {
      memes,
      loggedIn: req.session.userId ? true : false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET meme creation page
router.get('/create', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.redirect('/login');
    }
    const templates = await Template.findAll();
    const templateData = templates.map((template) => template.get({ plain: true }));
    res.render('create', { templates: templateData, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/');
  }
  res.render('login');
});

// GET register page
router.get('/register', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/');
  }
  res.render('register');
});

module.exports = router;


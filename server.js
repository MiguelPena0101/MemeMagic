const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const dotenv = require('./config/dotenv');
const db = require('./models');

const memeRoutes = require('./routes/memeRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use('/', authRoutes);
app.use('/', memeRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});

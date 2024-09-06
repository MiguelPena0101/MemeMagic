const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3001;


// .env file being used
require('dotenv').config();

// Applying Middleware to script
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

// Handlebars 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Routes
app.use(routes);

// Start server and sync database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
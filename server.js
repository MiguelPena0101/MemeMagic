require('dotenv').config(); // Load environment variables
const express = require('express');
const session = require('express-session');
const path = require('path');
const { engine } = require('express-handlebars');
const routes = require('./routes'); // Import combined routes (index.js in routes folder)
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.use(session({
  secret: process.env.SESSION_SECRET || 'defaultsecret', // Provide a fallback for the secret
  resave: false,
  saveUninitialized: true,
}));

//HANDLEBARS
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'), // Register partials directory
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
app.use(routes);

// Sync database and start server
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(error => console.error('Unable to connect to the database:', error));

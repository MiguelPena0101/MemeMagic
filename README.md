# MemeMagic

Welcome to the **MemeMagic**! This application allows users to generate, view, and save memes(if an account has been created) using a collection of meme templates.

To visit this project's deployed website please click [HERE](https://mememagic.onrender.com/)

![Screenshot of home page](./public/images/screenshots.png)

## Overview

Meme Magic is a full-stack web application that enables users to:
- Generate memes using templates from Imgflip API.
- View generated memes on the homepage.
- Save memes to a database for future reference.

# User Story

## As a user,
- I want to Generate a meme by selecting a template and adding custom text,
so that I can generate and save memes that express my creativity or humor.

## Acceptance Criteria:

- A user should be able to Generate a meme by clicking a button.
- The user should see a random meme.
- A logged in user should be able to Save a meme to their profile.
- The user should receive confirmation that their meme has been successfully saved.

## Tech Stack

### Frontend
- **HTML5**
- **CSS3 (Tailwind CSS)**
- **JavaScript**
- **Handlebars.js**

### Backend
- **Node.js**
- **Express.js**
- **Handlebars.js (Server-side)**

### Database
- **PostgreSQL** with **Sequelize ORM**

### Authentication
- **bcrypt.js** for password hashing
- **express-session** for session management
- **connect-pg-simple** for storing sessions in PostgreSQL

### APIs
- **Imgflip API** for meme Generating

### Deployment
- **Render** for hosting the application and database

## Features

- **User Authentication**: Register, login, and logout functionality.
- **Meme Generation**: Generate memes using Imgflip API templates.
- **Save Memes**: Save generated memes to your account.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive UI.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone git@github.com:MiguelPena0101/MemeMagic.git
   ```

2. **Install Dependencies**
    ```bash
    cd MemeMagic
    npm install
    ```


3. **Set Up Environment**
 
***Edit the .env file in the root directory and add your environment variables***

4. **Run the Application**
    ```bash
    npm start
    ```

----------------------------
# Contributers
* Miguel Pena
* Chuck Van-Lare


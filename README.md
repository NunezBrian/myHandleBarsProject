
# MyHandlebarsProject

This is a Node.js application using Express and Handlebars. The project includes user authentication with session management and connects to a MySQL database.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Deploying to Heroku](#deploying-to-heroku)
- [Troubleshooting](#troubleshooting)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/myHandlebarsProject.git
   cd myHandlebarsProject
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

### Local MySQL Database Setup

1. **Install MySQL**: Ensure MySQL is installed on your local machine and you have MySQL Workbench set up.

2. **Create a MySQL database**:
   ```sql
   CREATE DATABASE mydatabase;
   ```

3. **Update environment variables**: Create a `.env` file in the root of your project and add the following:

   ```dotenv
   DB_NAME=mydatabase
   DB_USER=root
   DB_PASSWORD=your_password
   DB_HOST=localhost
   DB_PORT=3306

   SESSION_SECRET=your_session_secret
   ```

### Modify `config/connection.js` to Use Environment Variables

Ensure your Sequelize configuration uses the environment variables correctly:

```javascript
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306
  }
);

module.exports = sequelize;
```

## Running the Application

1. **Start the application**:
   ```bash
   npm start
   ```

2. **Access the application**: Open your browser and navigate to `http://localhost:3000`.

## Deploying to Heroku

1. **Create a new Heroku application**:
   ```bash
   heroku create myhandlebarsproject
   ```

2. **Add ClearDB MySQL add-on**:
   ```bash
   heroku addons:create cleardb:punch
   ```

3. **Retrieve and set ClearDB environment variables**:
   ```bash
   heroku config:get CLEARDB_DATABASE_URL
   # Parse the URL and set the environment variables accordingly
   heroku config:set DB_NAME=parsed_db_name
   heroku config:set DB_USER=parsed_user
   heroku config:set DB_PASSWORD=parsed_password
   heroku config:set DB_HOST=parsed_host
   heroku config:set DB_PORT=parsed_port
   heroku config:set SESSION_SECRET=your_session_secret
   ```

4. **Deploy your code to Heroku**:
   ```bash
   git push heroku main
   ```

5. **Monitor logs**:
   ```bash
   heroku logs --tail
   ```

## Troubleshooting

- **ECONNREFUSED Error**: Ensure your database credentials are correct and your database is accessible.
- **App Crashed on Heroku**: Check the Heroku logs for detailed error messages and ensure all environment variables are set correctly.

For additional help, consult the [Heroku documentation](https://devcenter.heroku.com/) and the [Sequelize documentation](https://sequelize.org/docs/).
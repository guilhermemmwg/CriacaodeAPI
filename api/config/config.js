require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.USUARIO_BANCO,
    "password": process.env.SENHA_BANCO,
    "database": process.env.BANCO,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.USUARIO_BANCO,
    "password": process.env.SENHA_BANCO,
    "database": process.env.BANCO,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.USUARIO_BANCO,
    "password": process.env.SENHA_BANCO,
    "database": process.env.BANCO,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}

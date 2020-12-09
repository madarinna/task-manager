module.exports = {
  "development": {
    "username": "mvp-dbuser",
    "password": '123456',
    "database": "mvp-db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port" : 5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

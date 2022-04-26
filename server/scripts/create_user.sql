CREATE USER 'users_db_api'@'localhost' IDENTIFIED BY 'my666%SecretPassword';

GRANT ALL PRIVILEGES ON users_db.users TO 'users_db_api'@'localhost';

flush privileges;
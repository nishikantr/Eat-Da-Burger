CREATE DATABASE burger_db;

use burger_db;

CREATE TABLE burger(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(45) NOT NULL, 
	Devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)

);
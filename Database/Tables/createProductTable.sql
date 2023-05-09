CREATE TABLE PRODUCTS (
     id VARCHAR(100) NOT NULL PRIMARY KEY,
     name VARCHAR(100),
     description VARCHAR(1000),
	 images VARCHAR(1000),
     price DECIMAL(10, 2),
     user_id VARCHAR(100) NOT NULL,
     FOREIGN KEY (user_id) REFERENCES USERDB(id)
);

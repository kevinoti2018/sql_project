CREATE TABLE USERDB (
    id VARCHAR (100) NOT NULL PRIMARY KEY,
    username VARCHAR(200),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(200)
);

CREATE TABLE PRODUCTS (
     id VARCHAR(100) NOT NULL PRIMARY KEY,
     name VARCHAR(100),
     description VARCHAR(1000),
	 images VARCHAR(1000),
     price DECIMAL(10, 2),
     user_id VARCHAR(100) NOT NULL,
     FOREIGN KEY (user_id) REFERENCES USERDB(id)
);


INSERT INTO USERDB ( 
   id,
    username ,
    email,
    password
) VALUES('hmdnsuijdhf','otis','otis@gmail.com','password')


 CREATE OR ALTER PROCEDURE insertUser(
 @id VARCHAR(100), @username VARCHAR(200), @email VARCHAR(50), @password VARCHAR(200)
 )
 AS 

 BEGIN 
	INSERT INTO USERDB ( 
    id,
    username ,
    email,
    password
) VALUES(
	@id,
    @username ,
    @email,
    @password)
 END


CREATE OR ALTER PROCEDURE updateUser(
   @id VARCHAR (100),
    @username VARCHAR(200),
    @email VARCHAR(50),
    @password VARCHAR(200)

)

AS
BEGIN

UPDATE USERDB SET username= @username, email= @email, password= @password
WHERE id= @id 

END


CREATE OR ALTER PROCEDURE deleteUser(
  @id VARCHAR (100)
  )
AS 
BEGIN
   DELETE FROM USERDB WHERE id=@id
END



CREATE OR ALTER PROCEDURE getusers(
      @id VARCHAR (100),
    @username VARCHAR(200),
    @email VARCHAR(50),
    @password VARCHAR(200)
)
AS
BEGIN

SELECT * FROM USERDB 

END


CREATE OR ALTER PROCEDURE getUser(
   @id VARCHAR (100)
)
AS 
BEGIN
SELECT * FROM USERDB WHERE id=@id
END



CREATE OR ALTER PROCEDURE insertProduct(
     @id VARCHAR (100),
     @name VARCHAR(100),
     @description VARCHAR(1000),
	 @images VARCHAR(1000),
     @price DECIMAL(10, 2)
)
AS
BEGIN
INSERT INTO PRODUCTS(
     id,
     name,
     description,
	 images,
     price
)
VALUES(
    @id,
     @name,
     @description,
	 @images,
     @price
)
END


CREATE OR ALTER PROCEDURE getProducts(
	@id VARCHAR (100),
     @name VARCHAR(100),
     @description VARCHAR(1000),
	 @images VARCHAR(1000),
     @price DECIMAL(10, 2)
)
AS 

BEGIN 
 SELECT * FROM PRODUCTS
END


CREATE OR ALTER PROCEDURE getProduct(
	@id VARCHAR (100)     
)
AS 
 BEGIN
  SELECT * FROM PRODUCTS WHERE id=@id
 END


 CREATE OR ALTER PROCEDURE deleteProduct(
	@id VARCHAR (100)
 )
 AS 
 BEGIN 
 SELECT * FROM PRODUCTS WHERE id=@id
 END


 CREATE OR ALTER PROCEDURE updateProduct(
	@id VARCHAR (100),
     @name VARCHAR(100),
     @description VARCHAR(1000),
	 @images VARCHAR(1000),
     @price DECIMAL(10, 2)
 )
 AS

 BEGIN
  UPDATE PRODUCTS SET name=@name, description=@description, images=@images, price=@price
  WHERE id=@id
 END
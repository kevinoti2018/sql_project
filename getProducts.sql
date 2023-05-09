
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

CREATE OR ALTER PROCEDURE getProduct(
	@id VARCHAR (100)     
)
AS 
 BEGIN
  SELECT * FROM PRODUCTS WHERE id=@id
 END

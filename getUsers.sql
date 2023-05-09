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
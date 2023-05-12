
CREATE OR ALTER PROCEDURE getuserByname(
    @username VARCHAR(200)
)
AS
BEGIN

SELECT * FROM USERDB  WHERE username=@username

END
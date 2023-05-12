CREATE OR ALTER PROCEDURE resetPassword
   @email VARCHAR (100),
   @newPassword VARCHAR (200)
AS 
BEGIN
   UPDATE USERDB 
   SET password = @newPassword 
   WHERE email = @email;
END

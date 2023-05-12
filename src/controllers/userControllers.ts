import mssql from 'mssql';
import { Request, Response,RequestHandler, json } from 'express';
import {v4 as uid} from 'uuid';
import { sqlConfig } from '../config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { registrationSchema, resetPasswordSchema } from '../helpers/joiAuth';

interface ExtendRequest extends Request{
    body:{
        username:string
        email:string 
        password:string
    }
}

export const registerUser =  async (req:ExtendRequest,res:Response)=>{
    try{
        // generate a random id
        let id =uid()
        // get the data from the user
        const {username,email,password} =  req.body
          //validate first
          const {error}= registrationSchema.validate(req.body)
          if(error){
              return res.status(404).json(error.details[0].message)
          }
         //hashes password
        let hashedpassword =  await bcrypt.hash(password, 10)
        // connnect to a db
        const pool = await mssql.connect(sqlConfig)
        // make a request
        await pool.request()
        .input('id', mssql.VarChar, id)
        .input('username', mssql.VarChar,username)
        .input('email', mssql.VarChar, email)
        .input('password',mssql.VarChar, hashedpassword)
        .execute('insertUser')

        return res.status(201).json({message:"user succesfully created"})
    }
    catch(err:any){
        return res.status(500).json(err.message)
    }
}

export const loginUser = async (req: Request<{ email: string; password: string }>, res: Response) => {
    try {
      const { email, password } = req.body;
      const pool = await mssql.connect(sqlConfig);
      const result = await pool
        .request()
        .input("email", mssql.VarChar(100), email)
        .execute("getUserByEmail");
      const user = result.recordset[0];
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const token = jwt.sign(email,'ttttweywastring' as string)
      return res.json({mesage:"Login Successfull!!",token})
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };
  

  export const resetPassword = async (req: Request<{email:string, newPassword:string}>, res: Response) => {
    try {
      const { newPassword, email } = req.body;
      const {error}= resetPasswordSchema.validate(req.body)
      if(error){
          return res.status(404).json(error.details[0].message)
      }
      const hashedPassword =  await bcrypt.hash(newPassword,10)
      const pool = await mssql.connect(sqlConfig);
  
      const result = await pool
        .request()
        .input('newPassword', mssql.VarChar(200), hashedPassword)
        .input('email', mssql.VarChar(100), email)
        .execute('resetPassword');
      
      if (result.rowsAffected[0] > 0) {
        return res.status(200).json({ message: 'Password reset successfully!' });
      } else {
        return res.status(404).json({ message: 'User not found.' });
      }
    } catch (error:any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  };
  


  export const getUser =async(req:Request<{username:string}>,res:Response)=>{
   try {
    const {username} = req.body
    const pool = await mssql.connect(sqlConfig);
    const result = await pool
      .request()
      .input('username', mssql.VarChar(100), username)
      .execute('getuserByname');
      return res.status(200).json(result.recordset[0])
   } catch (error:any) {
     return res.status(500).json(error.message)
   }
  }
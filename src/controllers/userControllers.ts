import mssql from 'mssql';
import { Request, Response,RequestHandler, json } from 'express';
import {v4 as uid} from 'uuid';
import { sqlConfig } from '../config';
import bcrypt from 'bcrypt';
import {log} from 'console';

interface ExtendRequest extends Request{
    body:{
        username:string
        email:string 
        password:string
    }
}

export const registerUser =  async (req:ExtendRequest,res:Response)=>{
    try{
        let id =uid()
        const {username,email,password} =  req.body
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
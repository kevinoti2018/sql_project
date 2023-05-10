import sql from 'mssql'
import { log } from 'console'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve(__dirname, '../../.env')})
export const sqlConfig = {
  user:"sa "as string,
  password: "#Kyu@2019" as string,
  database: "Jitu1" as string,
  server: "localhost" as string,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
  
}


// sql.connect(sqlConfig).then(pool=>{  
//       if(pool.connected){
//           console.log("I'm Connected  the database");
          
//       }
//  })
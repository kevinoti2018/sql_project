import express,{json} from 'express'
import userRoutes from './routes/userRoutes';
const app =  express()
app.use(express.json())
app.use('/users',userRoutes)

app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen( 8080 , ()=>{ console.log('app is running')});



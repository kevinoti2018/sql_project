import {Router} from 'express'
import { getUser, loginUser, registerUser, resetPassword } from '../controllers/userControllers'
import { verifyLogin } from '../middleware/verifyToken'

const userRoutes = Router()

userRoutes.post('',registerUser)
userRoutes.post('/login',loginUser)
userRoutes.post('/reset',resetPassword)
userRoutes.post('/getuser',verifyLogin, getUser)

export default userRoutes
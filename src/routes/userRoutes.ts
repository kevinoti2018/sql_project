import {Router} from 'express'
import { registerUser } from '../controllers/userControllers'

const userRoutes = Router()

userRoutes.post('',registerUser)


export default userRoutes
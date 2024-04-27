import { Router } from "express";
import {signUp} from './controller/user.controller.js'
    const router = Router()

  router.post('/signup' , signUp)

    export default router 
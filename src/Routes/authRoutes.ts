import express from 'express'
const router = express.Router()
import { register, login, update } from '../controller/authController'

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/update").post(update)

export default router
import express from "express";
import {CreateUser, Login} from "../controller/auth.js"
const router  = express.Router();


router.post("/register",CreateUser)

router.post("/login",Login)


export default router;
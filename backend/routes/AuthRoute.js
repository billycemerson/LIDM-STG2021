import express from  "express";
import {Login, Logout, Me} from "../controllers/Auth.js"

const AuthRouter = express.Router();

AuthRouter.get('/me', Me);
AuthRouter.post('/login', Login);
AuthRouter.delete('/logout', Logout);

export default AuthRouter;
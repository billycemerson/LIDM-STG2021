import express from  'express';
import {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from  '../controllers/User.js';
import { verifyUser, adminOnly } from '../middleware/AuthUser.js';

const UserRouter = express.Router();

UserRouter.get('/user', verifyUser, adminOnly, getUser);
UserRouter.get('/user/:id', verifyUser, adminOnly, getUserById);
UserRouter.post('/user', verifyUser, adminOnly, createUser);
UserRouter.patch('/user/:id', verifyUser, adminOnly, updateUser);
UserRouter.delete('/user/:id', verifyUser, adminOnly, deleteUser);

export default UserRouter;
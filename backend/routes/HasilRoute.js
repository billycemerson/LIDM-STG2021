import express from "express";
import { verifyUser } from "../middleware/AuthUser.js";
import {
    getHasil,
    getHasilById,
    createHasil,
    updateHasil,
    deleteHasil,
    getHasilByQuizId, analisisHasilByQuizId 
} from "../controllers/Hasil.js";

const HasilRouter = express.Router();

HasilRouter.get('/hasil', verifyUser, getHasil);
HasilRouter.get('/hasil/:id', verifyUser, getHasilById);
HasilRouter.post('/hasil', verifyUser, createHasil);
HasilRouter.patch('/hasil/:id', verifyUser, updateHasil);
HasilRouter.delete('/hasil/:id', verifyUser, deleteHasil);

// Endpoint to get results by quizId
HasilRouter.get('/hasil/quiz/:quizId', verifyUser, getHasilByQuizId);
HasilRouter.get('/hasil/analysis/:quizId', verifyUser, analisisHasilByQuizId);

export default HasilRouter;
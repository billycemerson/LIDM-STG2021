import express from  "express";
import { verifyUser } from "../middleware/AuthUser.js";
import {
    getQuiz,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz
} from "../controllers/Quiz.js"

const QuizRouter = express.Router();

QuizRouter.get('/quiz', verifyUser, getQuiz);
QuizRouter.get('/quiz/:id', verifyUser, getQuizById);
QuizRouter.post('/quiz', verifyUser, createQuiz);
QuizRouter.patch('/quiz/:id', verifyUser, updateQuiz);
QuizRouter.delete('/quiz/:id', verifyUser, deleteQuiz);

export default QuizRouter;
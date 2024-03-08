import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const QuizList = () => {
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        getQuiz();
    }, []);

    const getQuiz = async () => {
        const response = await axios.get('http://localhost:5000/quiz');
        setQuiz(response.data);
    };

    const deleteQuiz = async (quizId) => {
        await axios.delete(`http://localhost:5000/quiz/${quizId}`);
        getQuiz();
    };

    return (
        <div>
            <h1 className='title'>Quiz</h1>
            <h2 className='subtitle'>List of Quiz</h2>
            <Link to="/quiz/add" className='button is-primary mb-2'>Tambah Quiz</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Quiz</th>
                        <th>Link Quiz</th>
                        <th>Kode Quiz</th>
                        <th>Dibuat Oleh</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {quiz.map((quizItem, index) => (
                        <tr key={quizItem.uuid}>
                            <td>{index + 1}</td>
                            <td>{quizItem.name}</td>
                            <td>{quizItem.link}</td>
                            <td>{quizItem.kode}</td>
                            <td>{quizItem.user.name}</td>
                            <td>
                                <Tooltip title="Hapus">
                                    <IconButton onClick={() => deleteQuiz(quizItem.uuid)} className="button is-small is-danger">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit">
                                    <Link to={`/quiz/edit/${quizItem.uuid}`} className="button is-small is-info">
                                        <EditIcon />
                                    </Link>
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QuizList;
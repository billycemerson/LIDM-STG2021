import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const HasilList = () => {
    const [hasil, setHasil] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState('');
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        getQuizzes();
    }, []);

    const getQuizzes = async () => {
        const response = await axios.get('http://localhost:5000/quiz');
        setQuizzes(response.data);
    };

    const getHasilByQuiz = async () => {
        if (selectedQuiz) {
            const response = await axios.get(`http://localhost:5000/hasil?quizId=${selectedQuiz}`);
            setHasil(response.data);
        }
    };

    const deleteHasil = async (hasilId) => {
        await axios.delete(`http://localhost:5000/hasil/${hasilId}`);
        getHasilByQuiz();
    };

    // Panggil getHasilByQuiz setiap kali selectedQuiz berubah
    useEffect(() => {
        getHasilByQuiz();
    }, [selectedQuiz]);

    return (
        <div>
            <h1 className='title'>Hasil</h1>
            <Link to="/hasil/add" className="button is-primary">Tambah Hasil</Link>
            <div className="select">
                <select onChange={(e) => setSelectedQuiz(e.target.value)}>
                    <option value="">Pilih Quiz</option>
                    {quizzes.map((quiz) => (
                        <option key={quiz.id} value={quiz.id}>{quiz.name}</option>
                    ))}
                </select>
            </div>
            <TableContainer component={Paper} style={{ width: '65%', overflowX: 'auto' }}>
            <h2 className='subtitle' style={{ marginTop: '1em' }}>Daftar Hasil Quiz</h2>
                <Table stickyHeader aria-label="hasil table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Nama Siswa</TableCell>
                            <TableCell>Kelas</TableCell>
                            <TableCell>Jenis Kelamin</TableCell>
                            <TableCell>Pertanyaan 1</TableCell>
                            <TableCell>Pertanyaan 2</TableCell>
                            <TableCell>Pertanyaan 3</TableCell>
                            <TableCell>Pertanyaan 4</TableCell>
                            <TableCell>Pertanyaan 5</TableCell>
                            <TableCell>Pertanyaan 6</TableCell>
                            <TableCell>Pertanyaan 7</TableCell>
                            <TableCell>Pertanyaan 8</TableCell>
                            <TableCell>Pertanyaan 9</TableCell>
                            <TableCell>Pertanyaan 10</TableCell>
                            <TableCell>Jumlah Benar</TableCell>
                            <TableCell>Jumlah Salah</TableCell>
                            <TableCell>Nilai Akhir</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {hasil.map((hasilItem, index) => (
                            <TableRow key={hasilItem.uuid}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{hasilItem.nama_siswa}</TableCell>
                                <TableCell>{hasilItem.kelas}</TableCell>
                                <TableCell>{hasilItem.jenis_kelamin}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_1}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_2}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_3}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_4}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_5}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_6}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_7}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_8}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_9}</TableCell>
                                <TableCell>{hasilItem.pertanyaan_10}</TableCell>
                                <TableCell>{hasilItem.jumlah_benar}</TableCell>
                                <TableCell>{hasilItem.jumlah_salah}</TableCell>
                                <TableCell>{hasilItem.nilai_akhir}</TableCell>
                                <TableCell>
                                    <Tooltip title="Hapus">
                                        <IconButton onClick={() => deleteHasil(hasilItem.uuid)} className="button is-small is-danger">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit">
                                        <Link to={`/hasil/${hasilItem.uuid}`} className="button is-small is-info">
                                            <EditIcon />
                                        </Link>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default HasilList;
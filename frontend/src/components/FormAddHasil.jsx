import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddHasil = () => {
    const [formData, setFormData] = useState({
        nama_siswa: '',
        kelas: '',
        jenis_kelamin: '',
        pertanyaan_1: '',
        pertanyaan_2: '',
        pertanyaan_3: '',
        pertanyaan_4: '',
        pertanyaan_5: '',
        pertanyaan_6: '',
        pertanyaan_7: '',
        pertanyaan_8: '',
        pertanyaan_9: '',
        pertanyaan_10: '',
        jumlah_benar: '',
        jumlah_salah: '',
        nilai_akhir: '',
        quizId: '',
        userId: ''
    });
    const [quizList, setQuizList] = useState([]);
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuizList = async () => {
            try {
                const response = await axios.get('http://localhost:5000/quiz');
                setQuizList(response.data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchQuizList();
    }, []);

    useEffect(() => {
        // You can set userId based on authentication
        // For demonstration purposes, setting it to a constant value here
        const userId = 'user_id'; // Change this to the actual user ID
        setFormData(prevState => ({
            ...prevState,
            userId: userId
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Find the selected quiz object
            const selectedQuiz = quizList.find(quiz => quiz.name === formData.nama_quiz);
            if (!selectedQuiz) {
                throw new Error("Quiz not found");
            }
            const { id: quizId } = selectedQuiz;

            // Update formData with quizId
            setFormData(prevState => ({
                ...prevState,
                quizId: quizId
            }));

            await axios.post('http://localhost:5000/hasil', formData);
            setMsg('Hasil berhasil ditambahkan');
            navigate('/hasil');
        } catch (error) {
            console.error('Error adding hasil:', error);
            setMsg('Gagal menambahkan hasil');
        }
    };

    return (
        <div>
            <h1 className='title'>Tambah Hasil</h1>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <p className='has-text-centered'>{msg}</p>
                            <div className="field">
                                <label className='label'>Nama Siswa</label>
                                <div>
                                    <input
                                        type="text"
                                        name="nama_siswa"
                                        value={formData.nama_siswa}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Nama Siswa'
                                    />
                                </div>
                            </div>
                            
                            <div className="field">
                                <label className='label'>Kelas</label>
                                <div>
                                    <input
                                        type="text"
                                        name="kelas"
                                        value={formData.kelas}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Kelas'
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Jenis Kelamin</label>
                                <div>
                                    <div className="select">
                                        <select
                                            name="jenis_kelamin"
                                            value={formData.jenis_kelamin}
                                            onChange={handleChange}
                                        >
                                            <option value="">Pilih Jenis Kelamin</option>
                                            <option value="Laki-laki">Laki-laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((index) => (
                                <div key={index} className="field">
                                    <label className='label'>Pertanyaan {index}</label>
                                    <div>
                                        <div className="select">
                                            <select
                                                name={`pertanyaan_${index}`}
                                                value={formData[`pertanyaan_${index}`]}
                                                onChange={handleChange}
                                            >
                                                <option value="">Pilih Jawaban</option>
                                                <option value="Benar">Benar</option>
                                                <option value="Salah">Salah</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="field">
                                <label className='label'>Jumlah Benar</label>
                                <div>
                                    <input
                                        type="number"
                                        name="jumlah_benar"
                                        value={formData.jumlah_benar}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Jumlah Benar'
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Jumlah Salah</label>
                                <div>
                                    <input
                                        type="number"
                                        name="jumlah_salah"
                                        value={formData.jumlah_salah}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Jumlah Salah'
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Skor Akhir</label>
                                <div>
                                    <input
                                        type="number"
                                        name="nilai_akhir"
                                        value={formData.nilai_akhir}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Skor Akhir'
                                    />
                                </div>
                            </div>

                            <label className="label">Nama Quiz</label>
                            <div className="control">
                                <select
                                    className="select"
                                    name="nama_quiz"
                                    value={formData.nama_quiz}
                                    onChange={handleChange}
                                >
                                    <option value="">Pilih Quiz</option>
                                    {quizList.map(quiz => (
                                        <option key={quiz.id} value={quiz.name}>{quiz.name}</option>
                                    ))}
                                </select>
                            </div>                 

                            <div className="field">
                                <div className="control">
                                    <button type='submit' className="button is-success">
                                        Tambahkan
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddHasil;

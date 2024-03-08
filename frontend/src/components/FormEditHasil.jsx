import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditHasil = () => {
    const [hasilData, setHasilData] = useState({});
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const { quizId, uuid } = useParams();

    useEffect(() => {
        const getHasilData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/hasil/${uuid}`);
                setHasilData(response.data);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };

        getHasilData();
    }, [quizId, uuid]);

    const updateHasil = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/hasil/${uuid}`, hasilData);
            navigate('/hasil');
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHasilData({
            ...hasilData,
            [name]: value
        });
    };

    return (
        <div>
            <h1 className='title'>Edit Hasil</h1>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateHasil}>
                            <p className='has-text-centered'>{msg}</p>
                            <div className="field">
                                <label className='label'>Nama Siswa</label>
                                <div>
                                    <input
                                        type="text"
                                        name="nama_siswa"
                                        value={hasilData.nama_siswa || ''}
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
                                        value={hasilData.kelas || ''}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Kelas'
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className='label'>Jenis Kelamin</label>
                                <div>
                                    <select
                                        name="jenis_kelamin"
                                        value={hasilData.jenis_kelamin || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jenis Kelamin</option>
                                        <option value="Laki-laki">Laki-laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 1</label>
                                <div>
                                    <select
                                        name="pertanyaan_1"
                                        value={hasilData.pertanyaan_1 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 2</label>
                                <div>
                                    <select
                                        name="pertanyaan_2"
                                        value={hasilData.pertanyaan_2 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 3</label>
                                <div>
                                    <select
                                        name="pertanyaan_3"
                                        value={hasilData.pertanyaan_3 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 4</label>
                                <div>
                                    <select
                                        name="pertanyaan_4"
                                        value={hasilData.pertanyaan_4 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 5</label>
                                <div>
                                    <select
                                        name="pertanyaan_5"
                                        value={hasilData.pertanyaan_5 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 6</label>
                                <div>
                                    <select
                                        name="pertanyaan_6"
                                        value={hasilData.pertanyaan_6 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 7</label>
                                <div>
                                    <select
                                        name="pertanyaan_7"
                                        value={hasilData.pertanyaan_7 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 8</label>
                                <div>
                                    <select
                                        name="pertanyaan_8"
                                        value={hasilData.pertanyaan_8 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 9</label>
                                <div>
                                    <select
                                        name="pertanyaan_9"
                                        value={hasilData.pertanyaan_9 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Pertanyaan 10</label>
                                <div>
                                    <select
                                        name="pertanyaan_10"
                                        value={hasilData.pertanyaan_10 || ''}
                                        onChange={handleChange}
                                        className='select'
                                    >
                                        <option value="">Pilih Jawaban</option>
                                        <option value="Benar">Benar</option>
                                        <option value="Salah">Salah</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Jumlah Benar</label>
                                <div>
                                    <input
                                        type="number"
                                        name="jumlah_benar"
                                        value={hasilData.jumlah_benar || ''}
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
                                        value={hasilData.jumlah_salah || ''}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Jumlah Salah'
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className='label'>Nilai Akhir</label>
                                <div>
                                    <input
                                        type="number"
                                        name="nilai_akhir"
                                        value={hasilData.nilai_akhir || ''}
                                        onChange={handleChange}
                                        className='input'
                                        placeholder='Nilai Akhir'
                                    />
                                </div>
                            </div>
                            
                            <div className="field">
                                <div className="control">
                                    <button type='submit' className="button is-success">
                                        Update
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

export default FormEditHasil;
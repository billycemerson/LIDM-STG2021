import Hasil from "../models/HasilModel.js";
import Quiz from "../models/QuizModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getHasil = async (req, res) => {
    try {
        let response;
        if (req.query.quizId) {
            response = await Hasil.findAll({
                where: {
                    quizId: req.query.quizId
                }
            });
        } else {
            response = await Hasil.findAll();
        }
        res.status(200).json(response);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ msg: "Terjadi kesalahan dalam mengambil data hasil." });
    }
}

export const getHasilById = async (req, res) => {
    try {
        const hasil = await Hasil.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!hasil) {
            return res.status(404).json({ msg: "Data Tidak Ditemukan" });
        }
        res.status(200).json(hasil);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getHasilByQuizId = async (req, res) => {
    try {
        const { quizId } = req.params; // Mengambil quizId dari parameter
        let response;
        if (req.role === "admin") {
            response = await Hasil.findAll({ where: { quizId: quizId } });
        } else {
            response = await Hasil.findAll({ where: { userId: req.userId, quizId: quizId } });
        }
        res.status(200).json(response);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ msg: "Terjadi kesalahan dalam mengambil data hasil." });
    }
};

export const createHasil = async (req, res) => {
    const { nama_siswa, kelas, jenis_kelamin, pertanyaan_1, pertanyaan_2, pertanyaan_3, pertanyaan_4, pertanyaan_5, 
        pertanyaan_6, pertanyaan_7, pertanyaan_8, pertanyaan_9, pertanyaan_10, jumlah_benar, jumlah_salah, nilai_akhir } = req.body;
    
    try {
        // Temukan pengguna yang saat ini masuk
        const user = await User.findOne({ where: { id: req.userId } });
        
        if (!user) {
            return res.status(404).json({ msg: "Pengguna tidak ditemukan" });
        }

        // Temukan Quiz yang dimiliki oleh pengguna
        const quiz = await Quiz.findOne({ where: { userId: user.id, name: req.body.nama_quiz } });

        if (!quiz) {
            return res.status(404).json({ msg: "Quiz tidak ditemukan" });
        }

        // Buat Hasil menggunakan quizId dari Quiz yang ditemukan
        await Hasil.create({
            nama_siswa: nama_siswa,
            kelas: kelas,
            jenis_kelamin: jenis_kelamin,
            pertanyaan_1: pertanyaan_1,
            pertanyaan_2: pertanyaan_2,
            pertanyaan_3: pertanyaan_3,
            pertanyaan_4: pertanyaan_4,
            pertanyaan_5: pertanyaan_5,
            pertanyaan_6: pertanyaan_6,
            pertanyaan_7: pertanyaan_7,
            pertanyaan_8: pertanyaan_8,
            pertanyaan_9: pertanyaan_9,
            pertanyaan_10: pertanyaan_10,
            jumlah_benar: jumlah_benar,
            jumlah_salah: jumlah_salah,
            nilai_akhir: nilai_akhir,
            quizId: quiz.id,
            userId: user.id // Menggunakan userId dari pengguna saat ini
        });

        res.status(201).json({ msg: "Hasil berhasil dibuat" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateHasil = async (req, res) => {
    const { nama_siswa, kelas, jenis_kelamin, pertanyaan_1, pertanyaan_2, pertanyaan_3, pertanyaan_4, pertanyaan_5, 
        pertanyaan_6, pertanyaan_7, pertanyaan_8, pertanyaan_9, pertanyaan_10, jumlah_benar, jumlah_salah, nilai_akhir, quizId } = req.body;
    try {
        const hasil = await Hasil.findOne({
            where: {
                uuid: req.params.id,
                userId: req.userId // Tambahkan ini untuk memastikan hasil hanya diperbarui oleh pengguna yang sesuai
            }
        });
        if (!hasil) {
            return res.status(404).json({ msg: "Data Tidak Ditemukan" });
        }
        await Hasil.update({
            nama_siswa: nama_siswa,
            kelas: kelas,
            jenis_kelamin: jenis_kelamin,
            pertanyaan_1: pertanyaan_1,
            pertanyaan_2: pertanyaan_2,
            pertanyaan_3: pertanyaan_3,
            pertanyaan_4: pertanyaan_4,
            pertanyaan_5: pertanyaan_5,
            pertanyaan_6: pertanyaan_6,
            pertanyaan_7: pertanyaan_7,
            pertanyaan_8: pertanyaan_8,
            pertanyaan_9: pertanyaan_9,
            pertanyaan_10: pertanyaan_10,
            jumlah_benar: jumlah_benar,
            jumlah_salah: jumlah_salah,
            nilai_akhir: nilai_akhir,
            quizId: quizId
        }, {
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json({ msg: "Hasil berhasil diperbarui" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteHasil = async (req, res) => {
    try {
        const hasil = await Hasil.findOne({
            where: {
                uuid: req.params.id,
                userId: req.userId // Tambahkan ini untuk memastikan hasil hanya dihapus oleh pengguna yang sesuai
            }
        });
        if (!hasil) {
            return res.status(404).json({ msg: "Data Tidak Ditemukan" });
        }
        await Hasil.destroy({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json({ msg: "Hasil berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const analisisHasilByQuizId = async (req, res) => {
    try {
        // Ambil quizId dari parameter
        const { quizId } = req.params;

        // Ambil data hasil berdasarkan quizId
        let hasil;
        if (req.role === "admin") {
            hasil = await Hasil.findAll({ where: { quizId: quizId } });
        } else {
            hasil = await Hasil.findAll({ where: { userId: req.userId, quizId: quizId } });
        }

        // Jika hasil tidak ditemukan, kirim respons 404
        if (!hasil || hasil.length === 0) {
            return res.status(404).json({ msg: "Hasil quiz tidak ditemukan" });
        }

        // Hitung rata-rata nilai quiz siswa
        const totalNilai = hasil.reduce((acc, curr) => acc + curr.nilai_akhir, 0);
        const averageScore = totalNilai / hasil.length;

        // Temukan nilai terendah
        const minScore = Math.min(...hasil.map(item => item.nilai_akhir));

        // Temukan nilai tertinggi
        const maxScore = Math.max(...hasil.map(item => item.nilai_akhir));

        // Hitung rata-rata nilai quiz siswa laki-laki
        const maleResults = hasil.filter(item => item.jenis_kelamin === 'Laki-laki');
        const totalMaleScore = maleResults.reduce((acc, curr) => acc + curr.nilai_akhir, 0);
        const maleAverage = totalMaleScore / maleResults.length;

        // Hitung rata-rata nilai quiz siswa perempuan
        const femaleResults = hasil.filter(item => item.jenis_kelamin === 'Perempuan');
        const totalFemaleScore = femaleResults.reduce((acc, curr) => acc + curr.nilai_akhir, 0);
        const femaleAverage = totalFemaleScore / femaleResults.length;

        // Hitung soal yang paling sering dijawab benar dan salah
        const questionCounts = Array.from({ length: 10 }, () => ({ benar: 0, salah: 0 }));
        hasil.forEach(item => {
            for (let i = 1; i <= 10; i++) {
                const key = `pertanyaan_${i}`;
                if (item[key] === 'Benar') {
                    questionCounts[i - 1].benar++;
                } else if (item[key] === 'Salah') {
                    questionCounts[i - 1].salah++;
                }
            }
        });
        const mostCorrectQuestionIndex = questionCounts.findIndex(item => item.benar === Math.max(...questionCounts.map(item => item.benar)));
        const mostIncorrectQuestionIndex = questionCounts.findIndex(item => item.salah === Math.max(...questionCounts.map(item => item.salah)));
        const mostCorrectQuestion = `Pertanyaan ${mostCorrectQuestionIndex + 1}`;
        const mostIncorrectQuestion = `Pertanyaan ${mostIncorrectQuestionIndex + 1}`;

        // Kirim respons dengan hasil analisis
        res.status(200).json({
            averageScore: averageScore,
            minScore: minScore,
            maxScore: maxScore,
            maleAverage: maleAverage,
            femaleAverage: femaleAverage,
            mostCorrectQuestion: mostCorrectQuestion,
            mostIncorrectQuestion: mostIncorrectQuestion
        });
    } catch (error) {
        // Tangani error jika terjadi
        console.error("Error:", error);
        res.status(500).json({ msg: "Terjadi kesalahan saat melakukan analisis hasil" });
    }
};
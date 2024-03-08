import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js/auto';

const VisualisasiHasil = () => {
  const [hasilQuiz, setHasilQuiz] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [quizList, setQuizList] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/quiz");
        setQuizList(response.data);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  useEffect(() => {
    const fetchHasilQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/hasil${selectedQuiz ? `?quizId=${selectedQuiz}` : ''}`);
        setHasilQuiz(response.data);
      } catch (error) {
        console.error("Error fetching hasil quiz data:", error);
      }
    };

    fetchHasilQuiz();
  }, [selectedQuiz]);

  const handleQuizChange = (e) => {
    setSelectedQuiz(e.target.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const filteredHasilQuiz = hasilQuiz.filter((item) => {
    if (selectedGender && selectedGender !== "" && item.jenis_kelamin !== selectedGender) return false;
    return true;
  });

  const calculateAverage = () => {
    if (filteredHasilQuiz.length === 0) return 0;
    const total = filteredHasilQuiz.reduce((acc, curr) => acc + curr.nilai_akhir, 0);
    return total / filteredHasilQuiz.length;
  };

  const calculateMin = () => {
    if (filteredHasilQuiz.length === 0) return 0;
    return Math.min(...filteredHasilQuiz.map(item => item.nilai_akhir));
  };

  const calculateMax = () => {
    if (filteredHasilQuiz.length === 0) return 0;
    return Math.max(...filteredHasilQuiz.map(item => item.nilai_akhir));
  };

  const calculateQuestionData = () => {
    const questionCounts = Array.from({ length: 10 }, () => ({ benar: 0, salah: 0 }));
    filteredHasilQuiz.forEach(item => {
      for (let i = 1; i <= 10; i++) {
        const key = `pertanyaan_${i}`;
        if (item[key] === 'Benar') {
          questionCounts[i - 1].benar++;
        } else if (item[key] === 'Salah') {
          questionCounts[i - 1].salah++;
        }
      }
    });
    return questionCounts;
  };

  const questionLabels = Array.from({ length: 10 }, (_, i) => `Pertanyaan ${i + 1}`);
  const questionData = calculateQuestionData();

  const data = {
    labels: questionLabels,
    datasets: [
      {
        label: 'Benar',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: questionData.map(item => item.benar)
      },
      {
        label: 'Salah',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: questionData.map(item => item.salah)
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          autoSkip: false
        }
      }
    }
  };

  return (
    <div>
      <h2 className="subtitle">Visualisasi Hasil Quiz</h2>
      <div>
        <label>Pilih Quiz:</label>
        <select value={selectedQuiz} onChange={handleQuizChange}>
          <option value="">Semua Quiz</option>
          {quizList.map((quiz) => (
            <option key={quiz.id} value={quiz.id}>
              {quiz.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Pilih Jenis Kelamin:</label>
        <select value={selectedGender} onChange={handleGenderChange}>
          <option value="">Semua Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
      <div>
        <h3>Rata-rata Nilai: {calculateAverage()}</h3>
        <h3>Nilai Terendah: {calculateMin()}</h3>
        <h3>Nilai Tertinggi: {calculateMax()}</h3>
      </div>
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default VisualisasiHasil;
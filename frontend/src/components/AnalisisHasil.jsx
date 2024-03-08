import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnalisisHasil = () => {
  const [quizList, setQuizList] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    fetchQuizList();
  }, []);

  const fetchQuizList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/quiz");
      setQuizList(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleQuizChange = (e) => {
    setSelectedQuiz(e.target.value);
  };

  const handleStartAnalysis = () => {
    setShowChatbot(true);
  };

  const handleAnalysis = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/hasil/analysis/${selectedQuiz}`);
      setAnalysisResult(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderAnalysisChat = () => {
    if (!analysisResult) return null;
    return (
      <div className="chatbot">
        <div className="chatbot-message">
          <p>Rata-rata Nilai Quiz Siswa: {analysisResult.averageScore}</p>
          <p>Nilai Terendah: {analysisResult.minScore}</p>
          <p>Nilai Tertinggi: {analysisResult.maxScore}</p>
          <p>Rata-rata Nilai Quiz Siswa Laki-laki: {analysisResult.maleAverage}</p>
          <p>Rata-rata Nilai Quiz Siswa Perempuan: {analysisResult.femaleAverage}</p>
          <p>Soal yang Paling Sering Dijawab Benar: {analysisResult.mostCorrectQuestion}</p>
          <p>Soal yang Paling Sering Dijawab Salah: {analysisResult.mostIncorrectQuestion}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {!showChatbot ? (
        <div>
          <h2 className="subtitle">Analisis Hasil Quiz</h2>
          <button onClick={handleStartAnalysis}>Mulai Analisis</button>
        </div>
      ) : (
        <div>
          <div className="chatbot">
            <div className="chatbot-message">
              <p>Selamat datang! Silakan pilih quiz untuk dianalisis:</p>
              <select value={selectedQuiz} onChange={handleQuizChange}>
                <option value="">Semua Quiz</option>
                {quizList.map((quiz) => (
                  <option key={quiz.id} value={quiz.id}>
                    {quiz.name}
                  </option>
                ))}
              </select>
              <button onClick={handleAnalysis}>Analisis Hasil</button>
            </div>
          </div>
          {renderAnalysisChat()}
        </div>
      )}
    </div>
  );
};

export default AnalisisHasil;

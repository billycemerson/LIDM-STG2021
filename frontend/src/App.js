import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import User from './pages/User.jsx';
import Quiz from './pages/Quiz.jsx';
import AddUser from './pages/AddUser.jsx';
import EditUser from './pages/EditUser.jsx';
import AddQuiz from './pages/AddQuiz.jsx';
import EditQuiz from './pages/EditQuiz.jsx';
import Hasil from './pages/Hasil.jsx';
import EditHasil from './pages/EditHasil.jsx';
import AddHasil from './pages/AddHasil.jsx';
import Visualisasi from './pages/Visualisasi.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/user/add" element={<AddUser />}/>
          <Route path="/user/edit/:id" element={<EditUser />}/>
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/quiz/add" element={<AddQuiz />}/>
          <Route path="/quiz/edit/:id" element={<EditQuiz />}/>
          <Route path="/hasil" element={<Hasil />}/>
          <Route path="/hasil/:uuid" element={<EditHasil />}/>
          <Route path="/hasil/add" element={<AddHasil />}/>
          <Route path="/visualisasi" element={<Visualisasi />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import RentNowLanding from './pages/landing';
import RegistrationPage from './pages/registration';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RentNowLanding />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
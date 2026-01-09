import './App.css';
import RentNowLanding from './pages/landing';
import RegistrationPage from './pages/registration';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import ListingsPage from './pages/listings/listingspage';
import CreateListing  from './pages/listings/createlisting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RentNowLanding />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />  
      <Route path="/listings" element={<ListingsPage />} />
      <Route path="/create-listing" element={<CreateListing />} />
    </Routes>
  );
}

export default App;
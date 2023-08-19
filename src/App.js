import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import './App.css';
import Login from './components/Auth/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<h2>Home page</h2>} />
        <Route exact path="/auth/signup" element={<Signup />} />
        <Route exact path="/auth/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

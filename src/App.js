import Container from '@mui/material/Container';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Container
        maxWidth="xl"
      >
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;

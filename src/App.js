import Container from '@mui/material/Container';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Error from './pages/Error';
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
          <Route exact path="/"/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;

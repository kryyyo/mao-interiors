import Container from '@mui/material/Container';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <Container
        maxWidth="xl"
      >
        <Header />
        <Routes>
          {/* <Route exact path="*" element={<SearchBar/>}/> */}
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;

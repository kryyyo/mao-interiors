import Container from '@mui/material/Container';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState, useEffect } from 'react';
import { UserProvider } from './UserContext';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import AdminUser from './pages/AdminUser';
import AdminUserOrder from './pages/AdminUserOrder';
import AdminOrder from './pages/AdminOrder';
import AdminProducts from './pages/AdminProducts';
import AddProduct from './pages/AddProduct';
import Box from '@mui/material/Box';

function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
    firstName: null,
  })
  
  const unsetUser = () => {
    localStorage.clear();
  }

  useEffect(() => {
    fetch(`${ process.env.REACT_APP_API_URL }/users/details`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if (typeof data._id !== "undefined") {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin,
          firstName: data.firstName,
        })
      } else {
        setUser({
          id: null,
          isAdmin: null,
          firstName: null,
        })
      }
    })
  }, [])

  return (
      <UserProvider value= {{user, setUser, unsetUser}}>
        <Router>
          <Container
            maxWidth="xl"
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Header />
            <Box
              sx={{
                flexGrow: 1,
                display: "flex"
              }}
            >
              <Routes>
                <Route exact path="/"/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/logout" element={<Logout />}/>
                <Route exact path="/register" element={<Register />}/>
                <Route exact path="/dashboard" element={<Dashboard />}/>
                <Route exact path="*" element={<Error />}/>
                <Route exact path="/admin/users" element={<AdminUser />}/>
                <Route exact path="/admin/users/:userId" element={<AdminUserOrder />}/>
                <Route exact path="/admin/orders" element={<AdminOrder />}/>
                <Route exact path="/admin/products" element={<AdminProducts />}/>
                <Route exact path="/admin/products/add" element={<AddProduct />}/>
              </Routes>
            </Box>
            <Footer />
          </Container>
        </Router>
      </UserProvider>
  );
}

export default App;

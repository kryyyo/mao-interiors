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
import EditProduct from './pages/EditProduct';
import UserOrder from './pages/UserOrder'
import Products from './pages/Products';
import PerProduct from './pages/PerProduct';
import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';

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
                <Route exact path="login" element={<Login />}/>
                <Route exact path="logout" element={<Logout />}/>
                <Route exact path="register" element={<Register />}/>
                <Route exact path="dashboard" element={<Dashboard />}/>
                <Route exact path="*" element={<Error />}/>

                {/* For Admin */}
                <Route exact path="dashboard/admin/users" element={<AdminUser />}/>
                <Route exact path="dashboard/admin/users/:userId" element={<AdminUserOrder />}/>
                <Route exact path="dashboard/admin/orders" element={<AdminOrder />}/>
                <Route exact path="dashboard/admin/products" element={<AdminProducts />}/>
                <Route exact path="dashboard/admin/products/add" element={<AddProduct />}/>
                <Route exact path="dashboard/admin/products/edit/:productId" element={<EditProduct />}/>

                {/* For Users */}
                <Route exact path="dashboard/myorders" element={<UserOrder />}/>
                <Route exact path="products" element={<Products />}/>
                <Route exact path="products/:productId" element={<PerProduct />}/>
                <Route exact path="cart" element={<CartPage />}/>
                <Route exact path="cart/checkout" element={<CheckOut />}/>
              </Routes>
            </Box>
            <Footer />
          </Container>
        </Router>
      </UserProvider>
  );
}

export default App;

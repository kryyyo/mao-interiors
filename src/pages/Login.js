import { Grid, Typography, Button, TextField, Box } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from '../UserContext';
import Swal from "sweetalert2";


export default function Login() {
    
    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    function authenticate(e) {
		e.preventDefault();

		fetch(`${ process.env.REACT_APP_API_URL }/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email, 
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {

			if (typeof data.access !== "undefined") {
				localStorage.setItem('token', data.access)
				retrieveUserDetails(data.access)
 
				Swal.fire({
					title: "Login Successful",
					icon: "success",
					text: "Welcome to Mao Interiors!"
				})

                navigate("/dashboard")
			} else {
				Swal.fire({
					title: "Authentication Failed", 
					icon: "error", 
					text: "Check your login details and try again" 
				})
			}
		})

		setEmail("");
		setPassword("");
	}

	const retrieveUserDetails = (token) => {
		fetch(`${ process.env.REACT_APP_API_URL }/users/details`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setUser({
				id: data._id,
				isAdmin: data.isAdmin,
                firstName: data.firstName,
			})
		})
	}

    return (
        (user.id !== null) ? 
    	<Navigate to ="/dashboard" />
    	: 
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            marginY={10}
        >
            <Grid
                item
                xs={10}
                sm={5}
                lg={4}
                marginBottom={4}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
            >
                <Typography
                    variant="h6"
                    component="h1"
                >
                    Login to your account
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontSize="14px"
                >
                    Login or join Mao Interiors to checkout! 
                </Typography>
                <Button
                    sx={{
                        color: "#000",
                        border: 1,
                        borderColor: "#f1f1f1",
                        borderRadius: 6,
                        padding: 1,
                        paddingX: 6
                    }}
                    component={Link}
                    to="/register"
                >
                    Create Account
                </Button>
            </Grid>
            <Grid
                item
                xs={10}
                sm={5}
                lg={4}
            >
                    <Box
                        sx={{
                            display: "flex", 
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        component="form"
                        onSubmit = {(e) => authenticate(e)}
                    >
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            required
                            id="login-email"
                            label="Email Address"
                            variant="standard"
                            type="email"
                            autoComplete="email"
                            autoFocus
                            value = {email}
							onChange = {e => setEmail (e.target.value)}
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            id="login-password"
                            required
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            value = {password}
							onChange = {e => setPassword(e.target.value)}
                        />
                        <Button
                            id="login-button"
                            type="submit"
                            variant="contained"
                            disableElevation
                            sx={{
                                color: "#f1f1f1",
                                backgroundColor: "#000",
                                borderRadius: 6,
                                padding: 1,
                                paddingX: 6,
                                mt: 2,
                            }}
                        >
                            Login
                        </Button>
                    </Box>
            </Grid>
        </Grid>
    )
}
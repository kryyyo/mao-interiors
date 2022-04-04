import { Grid, Typography, Button, TextField, Box, Link } from "@mui/material";
import { useState, useContext } from "react";
import { Link as RouterLink, useNavigate, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../UserContext";

export default function Register() {
    const {user} = useContext(UserContext)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [mobileNo, setMobileNo] = useState('');  
    
    const navigate = useNavigate();

    function registerUser(e) {
        e.preventDefault()
        
        function isNotEmpty(input) {
            return (input !== '') ? true : false;
        }
    
        if (isNotEmpty(email) && 
            isNotEmpty(password) &&
            isNotEmpty(password2) &&
            isNotEmpty(firstName) && 
            isNotEmpty(lastName) &&
            isNotEmpty(mobileNo) &&
            (mobileNo.length === 11)){
                if (password === password2){
                    fetchRegister()
                } else {
                    Swal.fire({
                        title: "Password Mismatch!",
                        icon: "error", 
                        text: "Please retype your password."
                    })
                }
        } else {
            Swal.fire({
                title: "Missing inputs!",
                icon: "error", 
                text: "Please fill in all inputs."
            })
            }

        function fetchRegister() {
            fetch(`${ process.env.REACT_APP_API_URL }/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    mobileNo: mobileNo,
                    password: password
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.alert)
                if (data.alert === `Email already exists`) {
                    Swal.fire({
                        title: "Email Already Exists!", 
                        icon: "error",
                        text: "Please enter a new email."
                    })

                } else if (data) {
                    Swal.fire({
                        title: "Registration Success!", 
                        icon: "success",
                        text: "You have successfully registered!"
                    })
    
                    setEmail('')
                    setFirstName('')
                    setLastName('')
                    setMobileNo('')
                    setPassword('')
                    setPassword2('')
    
                    navigate("/login")

                } else {
                    Swal.fire({
                        title: "Something went wrong!",
                        icon: "error", 
                        text: "Please try again."
                    })
                }
            })
        }
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
                    variant="h4"
                    component="h1"
                >
                    Create a new account!
                </Typography>
                <Typography
                    variant="subtitle1"
                    fontSize="11px"
                >
                    <Typography>
                        Already have an account? <Link component={RouterLink} to="/login" underline="always">Login Here</Link>
                    </Typography>
                    
                </Typography>
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
                        onSubmit = {(e) => registerUser(e)}
                    >
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            required
                            id="reg-firstname"
                            label="First Name"
                            type="text"
                            variant="standard"
                            autoFocus
                            value = {firstName}
                            onChange = {e => setFirstName(e.target.value)}
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            required
                            id="reg-lastname"
                            label="Last Name"
                            type="text"
                            variant="standard"
                            value = {lastName}
                            onChange = {e => setLastName(e.target.value)}
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            required
                            id="reg-number"
                            label="Mobile Number"
                            inputProps={{
                                inputMode: 'numeric',
                                pattern: '[0][9][0-9]{9}',
                                minLength:"11",
                                maxLength:"11",
                            }}
                            type="text"
                            variant="standard"
                            value = {mobileNo}
                            onChange = {e => setMobileNo(e.target.value)}
                            helperText="(eg. 09123456789)"
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            required
                            id="reg-email"
                            label="Email Address"
                            type="email"
                            variant="standard"
                            autoComplete="email"
                            value = {email}
                            onChange = {e => setEmail(e.target.value)}
                            helperText="(eg. hello@mail.com)"
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            id="reg-password1"
                            required
                            label="Password"
                            type="password"
                            inputProps={{
                                minLength:"8",
                                maxLength:"16",
                            }}
                            autoComplete="current-password"
                            variant="standard"
                            value = {password}
                            onChange = {e => setPassword(e.target.value)}
                            helperText="(Password must be 8-16 characters)"
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            id="reg-password2"
                            required
                            label="Verify Password"
                            type="password"
                            variant="standard"
                            value = {password2}
                            onChange = {e => setPassword2(e.target.value)}
                        />
                        <Button
                            id="reg-button"
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
                            Register
                        </Button>
                    </Box>
            </Grid>
        </Grid>
    )
}
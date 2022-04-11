import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { FormControl, Radio, FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CheckOutCard() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [address, setAddress] = useState('');
    const [payment, setPayment] = useState('');

    const navigate = useNavigate();

    function checkOutOrder(e) {
        e.preventDefault()
        
        function isNotEmpty(input) {
            return (input !== '') ? true : false;
        }
    
        if (isNotEmpty(firstName) && 
            isNotEmpty(lastName) &&
            isNotEmpty(mobileNo) &&
            (mobileNo.length === 11)){
                checkOutMyOrder()
        } else {
            Swal.fire({
                title: "Missing inputs!",
                icon: "error", 
                text: "Please fill in all inputs."
            })
            }

        function checkOutMyOrder() {
            Swal.fire({
                title: 'Are you sure?',
                text: "Order will be placed after this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#990f02',
                cancelButtonColor: '#4b5320',
                confirmButtonText: 'Yes, checkout!'
                }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`${ process.env.REACT_APP_API_URL }/users/checkout`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify({
                            modeOfPayment: payment,
                            deliveryAddress: {
                                firstName: firstName,
                                lastName: lastName,
                                mobileNo: mobileNo,
                                address: address,
                            }
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data) {
                            setFirstName('')
                            setLastName('')
                            setMobileNo('')
                            setAddress('')
                            setPayment('')
            
                            Swal.fire({
                                title: 'Order Sucess!',
                                text: "You have successfully ordered your items!",
                                icon: 'success',
                                showCancelButton: true,
                                confirmButtonColor: '#800080',
                                cancelButtonColor: '#cc3300',
                                confirmButtonText: 'See my orders',
                                cancelButtonText: 'Go back to products'
                                }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate("/dashboard/myorders")
                                } else {
                                    navigate("/products")
                                }
                            })
        
                        } else {
                            Swal.fire({
                                title: "Something went wrong!",
                                icon: "error", 
                                text: "Please try again."
                            })
                        }
                    })
                }
            })
        }
    }

    return (
        <Grid container justifyContent="center" >
            <Grid item xs={12} p={3} textAlign="center">
                <Typography variant="h5"><b>Please enter your details</b></Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={5} px={3} pb={3}>
                <Box
                    component="form"
                    onSubmit = {(e) => checkOutOrder(e)}
                >
                    <Grid container>
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
                            fullWidth
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
                            fullWidth
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
                            fullWidth
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            required
                            id="reg-address"
                            label="Address"
                            type="address"
                            variant="standard"
                            autoComplete="address"
                            value = {address}
                            onChange = {e => setAddress(e.target.value)}
                            helperText="(eg. Street, City, State)"
                            fullWidth
                        />
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">How would you like to pay?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={payment}
                                onChange={(e) => setPayment(e.target.value)}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="cod" control={<Radio />} label="COD" />
                                <FormControlLabel value="debit" control={<Radio />} label="Debit" />
                                <FormControlLabel value="gcash" control={<Radio />} label="Gcash" />
                            </RadioGroup>
                        </FormControl>

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
                            fullWidth
                        >
                            Place Order
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
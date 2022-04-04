import { Grid, Typography, Button, TextField, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Register() {
    return (
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
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            required
                            id="reg-number"
                            label="Mobile Number (eg. 09123456789)"
                            minLength={11}
                            maxLength={11}
                            pattern="[0][9][0-9]{9}" 
                            type="text"
                            variant="standard"
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
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            id="reg-password"
                            required
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
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
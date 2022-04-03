import { Grid, Typography, Button, TextField, Box } from "@mui/material";

export default function Login() {
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
                    type="submit"
                    sx={{
                        color: "#000",
                        border: 1,
                        borderColor: "#f1f1f1",
                        borderRadius: 6,
                        padding: 1,
                        paddingX: 6
                    }}
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
                    >
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            required
                            id="standard-required"
                            label="Email Address"
                            variant="standard"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            sx={{
                                marginBottom: 2
                            }}
                            id="standard-password-input"
                            required
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button
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
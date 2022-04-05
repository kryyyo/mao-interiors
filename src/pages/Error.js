import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";

export default function Error() {
    const {user} = useContext(UserContext)

    return (
        <Box
            m={36}
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
                ERROR: 404 NOT FOUND
            </Typography>
            <Typography
                variant="subtitle1"
                fontSize="14px"
            >
                {
                    (user.id !== null && user.isAdmin) ? 
                    `Want to go back to the dashboard?`
                    :
                    `Want to go back to the main page?`
                }
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
                to="/"
            >
                {
                    (user.id !== null && user.isAdmin) ? 
                    `Go back to dashboard`
                    :
                    `Go back to main page`
                }
            </Button>
        </Box>
    )
    
}
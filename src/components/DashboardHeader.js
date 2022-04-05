import { Typography, Link, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function DashboardHeader() {
    const {user} = useContext(UserContext)

    return (
        <Box
            sx={{
                paddingTop: 5,
                paddingX: 5,
            }}
        >
            <Typography
                variant="h4"
                component="h1"
            >
                Hello {(user.isAdmin)? "Admin " + user.firstName : user.firstName}
            </Typography>
            <Typography
                variant="subtitle1"
                fontSize="11px"
            >
                <Typography>
                    Do you want to log in with a different account? <Link component={RouterLink} to="/logout" underline="always">Logout</Link>
                </Typography>
            </Typography>
        </Box>
    )
}
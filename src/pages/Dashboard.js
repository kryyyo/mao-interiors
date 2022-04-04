import { Typography, Link } from "@mui/material";
import { Link as RouterLink, Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function Dashboard() {
    const {user} = useContext(UserContext)

    return (
        (user.id !== null) ? 
    	<>
        <Typography
            variant="h4"
            component="h1"
        >
            Hello {user.firstName}
        </Typography>
        <Typography
            variant="subtitle1"
            fontSize="11px"
        >
            <Typography>
                Do you want to log in with a different account? <Link component={RouterLink} to="/logout" underline="always">Logout</Link>
            </Typography>
        </Typography>
        </>
        :
        <Navigate to ="/login" />
    )
}
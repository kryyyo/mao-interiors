import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function UserCardDetails() {

    const [user, setUser] = useState('')

    fetch(`${ process.env.REACT_APP_API_URL }/users/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        return console.log(data.map(user => user.firstName))
    })

    return (
        <Box
            sx={{
                display: "flex",
            }}
        
        >
            <Typography 
                sx={{ 
                    fontSize: "12px",
                    mr: 3,
                }} 
                color="text.secondary"
            >
                First Name
            </Typography>
            <Typography variant="body2">
                Collene
            </Typography>
        </Box>
    )
}
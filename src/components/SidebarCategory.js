import {ListItemButton, ListItemText, Typography, } from "@mui/material"
import { Link } from "react-router-dom"
import UserContext from "../UserContext"
import { useContext } from "react"


export default function SidebarCategory({props}) {
    const {user} = useContext(UserContext)

    return (
        props.map((category) => {
            return (
                <ListItemButton
                    key={category.key}
                    component={Link} 
                    to={category.link}
                >
                    <ListItemText>
                        <Typography
                            variant="body2"
                        >
                        {category.name}
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            )
        })
    )
}
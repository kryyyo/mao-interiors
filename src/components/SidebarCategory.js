import {ListItemButton, ListItemText, Typography, } from "@mui/material"


export default function SidebarCategory({props}) {
    return (
        props.map((category) => {
            return (
                <ListItemButton key={category.key}>
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
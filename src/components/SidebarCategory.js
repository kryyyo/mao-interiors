import { ListItemIcon, ListItemButton, ListItemText, Typography, } from "@mui/material"


export default function SidebarCategory({props}) {
    return (
        props.map((category) => {
            return (
                <ListItemButton>
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
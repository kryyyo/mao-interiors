import { Box, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from "@mui/icons-material";
import SidebarCategory from "./SidebarCategory";
import productCategories from "../data/productCategories"
import roomCategories from "../data/roomCategories";

export default function DrawerComponent() {
    
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                
                <Box
                    sx={{
                        minWidth: 320,
                        display: "flex",
                        alignItems: "flex-start",
                    }}
                >   
                    <IconButton
                        onClick={() => setOpenDrawer(!openDrawer)}
                        sx={{
                            color: "#000",
                            margin: "1%",
                            marginRight:"4%"
                        }}
                    >
                        <Close />
                    </IconButton>
                    <Box>
                        <img 
                            src="https://i.imgur.com/UKkmAzc.png" 
                            alt="furniture-logo"
                            width="50%" 
                        />  
                        <List>   
                            <ListItemText>
                                Products
                            </ListItemText>
                            <SidebarCategory props={productCategories}/>
                            <ListItem />
                            <ListItemText>
                                Rooms
                            </ListItemText>
                            <SidebarCategory props={roomCategories}/>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                sx={{ color: "#000"}}
            >
                <MenuIcon />
            </IconButton>
        </>
    )
}
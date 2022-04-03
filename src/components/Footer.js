import { Box, Typography, IconButton, Grid } from "@mui/material";
import footerLists from "../data/footerLists";
import FooterList from "./FooterList";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <>
        <Grid
            container
            p={2}
            sx={{
                width: 1,
                backgroundColor: '#f5f5f5',
            }}
        >
            
            <Grid
                item
                xs={12}
                md={3}
                lg={3}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img 
                        src="https://i.imgur.com/cUq4nbL.png" 
                        alt="logo"
                        width="96px"
                />
                <Box
                    mb={2}
                >
                    <IconButton
                        onClick={() => window.open("https://www.facebook.com/Mao-Interiors-102627125753517")}
                        sx={{
                            color: "#111",
                            border: 1,
                            borderColor: "#595959",
                            marginRight: 1,
                        }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => window.open("https://twitter.com/MaoInteriors")}
                        sx={{
                            color: "#111",
                            border: 1,
                            borderColor: "#595959",
                            marginRight: 1,
                        }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => window.open("https://www.instagram.com/interiors.mao/")}
                        sx={{
                            color: "#111",
                            border: 1,
                            borderColor: "#595959",
                        }}
                    >
                        <InstagramIcon />
                    </IconButton>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                md={9}
                lg={9}
            >
                <FooterList props={footerLists}/>
            </Grid>
        </Grid>
        <Box
            p={2}
            sx={{
                borderTop: 1,
                borderColor: 'grey.500',
                width: 1,
                backgroundColor: '#f5f5f5',
            }}
        >
            <Typography
                variant="body2"
                color= "#595959"
                fontSize="10px"
            >
                &copy; 2022 by ColleneDeSilva. All Rights Reserved.
            </Typography>
        </Box>
        </>
    )
}
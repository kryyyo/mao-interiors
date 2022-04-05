import { ListItemText, Link, Typography, ListItem, Grid } from "@mui/material";

export default function FooterList({props}) {
    return (
        <Grid
            container
            spacing={1}
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            {props.map((list) => {
            return (
                <Grid
                    item
                    xs={12}
                    sm={2}
                    marginX={2}
                    key={list.key}
                >
                    <ListItemText>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: 12,
                                fontWeight: "900",
                            }}
                        >
                            {list.title}
                        </Typography>
                    </ListItemText>
                    {
                        list.items.map((item) => {
                            return (
                                <ListItem key={item.key}>
                                    <Link 
                                        href="#" 
                                        underline="hover"
                                        sx={{
                                            fontSize: 12,
                                            color: "#595959",
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </ListItem>
                            )
                        })
                    }
                </Grid>
            )
            })}
        </Grid>
        
    )
}
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobileSlider from "@material-ui/core/Drawer";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,    
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";

import {
    Menu,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";


const useStyles = makeStyles(theme=>({
    sliderContainer: {
        width: 250,
        height: "100%",
        background: "#30475e",        
    },
    listItem: {
        color: "#e8e8e8",
    }
}));

const sliderIcons = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/PersonalPortfolio"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Projects",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/contact"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        sliderDrawer: false
    });

    const sliderToggle = (slider, open) => () => {
        setState({...state, [slider]: open});
    };


    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.sliderContainer} 
            component="div"
            onClick={sliderToggle("sliderDrawer", false)}
        >
            <Divider />
            <List>
                {
                    sliderIcons.map((item, key) => (
                        <ListItem button key={key} component={Link} to={item.listPath}>
                            <ListItemIcon className={classes.listItem}>
                                {item.listIcon}
                            </ListItemIcon>
                            <ListItemText 
                                primary={item.listText}
                                className={classes.listItem}
                            />                                                                                             
                        </ListItem>
                    ))
                }                    
            </List>
        </Box>        
    );

    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: '#222831'}}>
                    <Toolbar>
                        <IconButton onClick={sliderToggle("sliderDrawer", true)}>
                            <Menu style={{ color: '#f05454'}}/>
                        </IconButton>
                        <Typography variant="h5" style={{ color: '#e8e8e8'}}>Welcome Friend</Typography>
                    </Toolbar>
                    <MobileSlider        
                        anchor="left"                
                        open={state.sliderDrawer}
                        onClose={sliderToggle("sliderDrawer", false)}
                    >
                        {sideList("sliderDrawer")}
                    </MobileSlider>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;

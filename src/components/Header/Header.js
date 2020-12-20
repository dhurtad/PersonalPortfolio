import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box, IconButton } from '@material-ui/core';
import {
    GitHub,
    LinkedIn
} from '@material-ui/icons';
import Typed from 'react-typed';
import Mesmaller from './images/mesmaller.jpg'

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(1),        
    },
    title: {
        color: "white"
    },
    subtitle: {
        color: "#f05454",
        marginBottom: "3rem",
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }

}))

const Header = () => {
    const classes = useStyles();
    
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={Mesmaller} alt="Diego Hurtado" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Diego Hurtado"]} typeSpeed={40}/>
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Hello", "Welcome to my website", "Enjoy your stay :)"]} typeSpeed={40} backSpeed={60} loop></Typed> 
            </Typography>
            
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <IconButton onClick={() => window.open("https://github.com/dhurtad")}>
                        <GitHub style={{height:"3rem", width:"3rem", color:"#e8e8e8"}} />
                    </IconButton>
                    
                    <IconButton onClick={() => window.open("https://www.linkedin.com/in/diego-hurtado-961999201/")}>
                        <LinkedIn style={{height:"3.5rem", width:"3.5rem", color: "#e8e8e8"}} />
                    </IconButton>       
                </Grid>         
            </Grid>
        </Box>
    )
}

export default Header;

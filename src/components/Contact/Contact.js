import React from 'react'
import Navbar from '../Navbar';
import { makeStyles, withStyles } from '@material-ui/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "white",
        borderColor: "white"
    }
}))
const InputField = withStyles({
    "root": {
        "& label.Mui-focused": {
            color: "white",
            borderColor: "white"
        },
        "& label": {
            color: "white"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white"
            },
            "&:hover fieldset": {
                borderColor: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: "white"
            }
        },
        
    },
})(TextField);

const Contact = () => {
    const classes = useStyles();

    return (
        <Box component="div" style={{backgroundColor: "#30475e", height:"100vh"}}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography 
                    variant="h5" 
                    style={{color: "white",
                            textAlign: "center"}}>
                        Contact Me
                    </Typography>

                    <InputField fullWidth={true} label="Name" variant="outlined"  margin="dense" size="medium"/>
                    <br />
                    <InputField fullWidth={true} label="Email" variant="outlined"margin="dense" size="medium" />
                    <br />
                    <InputField fullWidth={true} label="Company Name" variant="outlined" margin="dense" size="medium" />
                    <br />
                    <Button variant="outlined" fullWidth={true} endIcon={<SendIcon />} className={classes.button}>Send</Button>
                </Box>
            </Grid>
        </Box>                    
    )
}

export default Contact;

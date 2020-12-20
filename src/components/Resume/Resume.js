import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Navbar from '../Navbar';
import pageOne from './images/resumepageone.jpg';
import pageTwo from './images/resumepagetwo.jpg';

const useStyles = makeStyles({
    page: {
        display: "block",
        margin: 'auto',
        paddingTop: "2%",        
        height: "50%",
        width: "50%",        
    }
})
const Resume = () => {
    const classes = useStyles();

    return (
        <div>            
            <Navbar />              
            <img className={classes.page} src={pageOne} alt="Resume Page"/>
            <img className={classes.page} src={pageTwo} alt="Resume Page"/>
        </div>
    )
}

export default Resume;

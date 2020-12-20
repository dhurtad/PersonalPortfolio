import React from 'react';
import { makeStyles } from '@material-ui/core';
import { 
    Box,
    Grid,
    Card, 
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    IconButton
} from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import Navbar from '../Navbar';
import newhorizons from './newhorizons.jpg';


const useStyles = makeStyles({
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }
})

const projectsList = [
    {
        title: "New Horizons Companion",
        body: "A web application tool for the game Animal Crossing: New Horizons",
        image: newhorizons,
        demolink: "https://dhurtad.github.io/NewHorizonsCompanion/",
        github: "https://github.com/dhurtad/NewHorizonsCompanion"
    }
]


const Projects = () => {    
    const classes = useStyles();

    return (
        <Box component="div">
            <Navbar />
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={6}>
                    {
                        projectsList.map((project, index) => (
                            <Card className={classes.cardContainer} key={index}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="Project"
                                    height="140"
                                    image={project.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {project.body}
                                        </Typography>                            
                                    </CardContent>
                                    <CardActions>
                                        <IconButton onClick={() => window.open(project.github)}>
                                            <GitHub />
                                        </IconButton>
                                        <Button size="small" color="primary" onClick={() => window.open(project.demolink)}>
                                            Live Demo
                                        </Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        ))
                    }                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects;
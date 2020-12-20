import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    particlesCanvas: {
        position: 'fixed'
    }
})

const BackgroundParticles = () => {
    const classes = useStyles();
    return (
        <>
            <Particles 
                canvasClassName={classes.particlesCanvas}
                params={{
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": true
                            },                        
                        },
                        "size": {
                            "value": 7,
                            "random": true,
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "move": {
                            "direction": "bottom",
                            "out_mode": "out",
                            "speed": 1.5
                        },
                        "line_linked": {
                            "enable": false
                        }
                    }                    
                }}
            />    
        </>
    )
}

export default BackgroundParticles;

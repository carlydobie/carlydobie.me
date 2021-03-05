import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
    textbox : {
        margin: "2vh",
    },
    heading : {
        fontSize: "30px",
        fontFamily: "arial",
        color: "#BEBEBE"
    },
    position : {
        textAlign: "left",
        paddingLeft: "10vw",
        paddingTop: "2vh",
        fontSize: "25px",
        fontFamily: "arial",
        color: "#717171",
    },
    dates : {
        fontStyle: "italic",
        fontSize: "20px",
        color: "#A1A1A1",
    }
}))

export default function WorkExperience() {
    const classes = useStyles();
    return (
        <body>
            <Box className={classes.textbox}>
                <Typography className={classes.heading}>
                        Work Experience
                </Typography>
            </Box>
            <Box>
                <Typography className={classes.position}>
                    Full Stack Software Engineer Intern
                    <Typography className={classes.dates}>
                        Discover Financial Sevices
                    </Typography>
                </Typography>
            </Box>
            <Box>
                <Typography className={classes.position}>
                    Endpoint Device Technician
                    <Typography className={classes.dates}>
                        Northern Illinois University
                    </Typography>
                </Typography>
            </Box>
            <Box>
                <Typography className={classes.position}>
                    Summer IT Help
                    <Typography className={classes.dates}>
                        School District U-46
                    </Typography>
                </Typography>
            </Box>
            <Box>
                <Typography className={classes.position}>
                    IT Helpdesk Technician
                    <Typography className={classes.dates}>
                        IT Lighthouse
                    </Typography>
                </Typography>
            </Box>
        </body>
    )
}
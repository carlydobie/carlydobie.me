import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textbox : {
        paddingTop: "10vh",
        margin: "2vw",
    },
    text : {
        fontSize: "6vw",
        fontFamily: "arial",
        color: "#BEBEBE"
    }
}))

export default function CurrentProjects() {
    const classes = useStyles();
    return (
        <body>
            <Box className={classes.textbox}>
                <Typography className={classes.text}>
                        Current Projects
                </Typography>
            </Box>
        </body>
    )
}
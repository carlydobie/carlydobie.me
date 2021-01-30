import React from 'react';
import { AppBar, Box, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';
import MyMenu from './menu.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        paddingLeft: "10vw",
        paddingRight: "10vw",
        paddingTop: "2vh",
    }
}))

export default function Navbar() {
    const classes = useStyles();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
        setIsMenuOpen(!isMenuOpen);
        setAnchorEl(event.currentTarget); 
    };

    return (
        <div className={classes.root}>
        <AppBar position="sticky" style={{background: 'transparent'}} elevation={0}>
            <Toolbar className={classes.toolbar}>
                <IconButton aria-label="menu" onClick={handleClick}>
                    <MenuIcon/>
                    <MyMenu open={isMenuOpen} anchorEl={anchorEl}/>
                </IconButton>
                <Box flexGrow="1"/>
                <IconButton href="https://github.com/carlydobie" target="_blank" aria-label="link to Github page">
                    <GitHubIcon/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/carly-dobie/" target="_blank" aria-label="link to LinkedIn page">
                    <LinkedInIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    );
}
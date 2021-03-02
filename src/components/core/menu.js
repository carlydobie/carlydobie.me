import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    menu: {
      flexGrow: 1,
    },
    menuItem: {
        fontFamily: "arial, 30",
        fontSize: "100%",
        width: "200%"
    }
}))

export default function MyMenu(props) {

    const classes = useStyles();

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <div>
            <Menu 
                id="menu"
                anchorEl={props.anchorEl}
                keepMounted
                open={props.open}
                onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>About Me</MenuItem>
                    <MenuItem onClick={handleClose}>Current Projects</MenuItem>
                    <MenuItem onClick={handleClose}>Contact Info</MenuItem>
                </Menu>
        </div>
    );
}
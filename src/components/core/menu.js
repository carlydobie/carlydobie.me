import React from 'react';
// import { Link } from 'react-router-dom'
// import Link from '@material-ui/core/Link'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { HashRouter, NavLink } from 'react-router-dom';

export default function MyMenu(props) {

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [, setAnchorEl] = React.useState(null);

    return (
        <div>
            <Menu 
                id="menu"
                anchorEl={props.anchorEl}
                keepMounted
                open={props.open}
                onClose={handleClose}
                >
                <HashRouter>
                <MenuItem to='/aboutme' component={NavLink} onClick={handleClose}>
                    About Me
                </MenuItem>
                <MenuItem to="/workexperience" component={NavLink} onClick={handleClose}>
                    Work Experience
                </MenuItem>
                <MenuItem to="/currentprojects" component={NavLink} onClick={handleClose}>
                    Current Projects
                </MenuItem>
                <MenuItem to="/contactinfo" component={NavLink} onClick={handleClose}>
                    Contact Info
                </MenuItem>
                </HashRouter>
            </Menu>
        </div>
    );
}
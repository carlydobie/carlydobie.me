import React from 'react';
// import { Link } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
                <MenuItem href='/aboutme' component={Link} onClick={handleClose}>
                    About Me
                </MenuItem>
                <MenuItem href="/workexperience" component={Link} onClick={handleClose}>
                    Work Experience
                </MenuItem>
                <MenuItem href="/currentprojects" component={Link} onClick={handleClose}>
                    Current Projects
                </MenuItem>
                <MenuItem href="/contactinfo" component={Link} onClick={handleClose}>
                    Contact Info
                </MenuItem>
            </Menu>
        </div>
    );
}
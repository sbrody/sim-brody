import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Button, Hidden, styled, BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';

const ThemeDrawer = styled(Drawer)({
    padding: '1rem'
});

const MenuBox = styled(Box)({
    width: '100%',
});

const ThemeBottomNavigation = styled(BottomNavigation)({
    position: 'fixed',
    bottom: '0',
    width: '100%',
    zIndex: '100'
});

const Menu = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(0);

    const handleClick = (event) => {
        console.log(event);
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <MenuBox>
            <Hidden mdUp>
                <Button style={{ position: 'fixed', zIndex: '100', right: '1rem' }} aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
                    <IconButton color="primary" aria-label="open menu">
                        <MenuIcon fontSize='large' style={{ color: "#050505" }} />
                    </IconButton>
                </Button>
            </Hidden>
            <Hidden smDown>
                <ThemeBottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction component={Link} to="/about" label="About" icon={<InfoIcon />} />
                    <BottomNavigationAction component={Link} to="/work" label="Work" icon={<CodeIcon />} />
                    <BottomNavigationAction component={Link} to="/demo" label="Demo" icon={<BuildIcon />} />
                    <BottomNavigationAction component={Link} to="/contact" label="Contact" icon={<EmailIcon />} />
                </ThemeBottomNavigation>
            </Hidden>
            <ThemeDrawer
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <List>
                    <ListItem key='Home' component={Link} to="/" >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem key='About' component={Link} to="/about">
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem key='Work' component={Link} to="/work" >
                        <ListItemIcon>
                            <CodeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Work" />
                    </ListItem>
                    <ListItem key='Demo' component={Link} to="/demo">
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary="Demo" />
                    </ListItem>
                    <ListItem key='Contact' component={Link} to="/contact">
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </ThemeDrawer>
        </MenuBox>
    )
}

export default Menu;
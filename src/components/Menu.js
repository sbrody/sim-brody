import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Button, Hidden, styled, BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';

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
                <Button style={{ position: 'fixed', zIndex: '100' }} aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
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
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="About" icon={<InfoIcon />} />
                    <BottomNavigationAction label="Work" icon={<CodeIcon />} />
                    <BottomNavigationAction label="Demo" icon={<BuildIcon />} />
                    <BottomNavigationAction label="Contact" icon={<EmailIcon />} />
                </ThemeBottomNavigation>
            </Hidden>
            <ThemeDrawer
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <List>
                    <ListItem key='Home'>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem key='About'>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem key='Work'>
                        <ListItemIcon>
                            <CodeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Work" />
                    </ListItem>
                    <ListItem key='Demo'>
                        <ListItemIcon>
                            <BuildIcon />
                        </ListItemIcon>
                        <ListItemText primary="Demo" />
                    </ListItem>
                    <ListItem key='Contact'>
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
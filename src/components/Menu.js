import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Button, Hidden, styled, BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { logoClicked } from '../actions';

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

const Menu = (props) => {

    console.log(props.payload.ishome);
    const dispatch = useDispatch();
    const pathname = window.location.pathname;

    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(pathname);

    // hook to allow the menu bar to adapt when the logo is clicked and reset state to false in redux store
    useEffect(() => {
        setValue(pathname);
        dispatch(logoClicked(false));
    }, [props.payload.ishome])

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
                        if (props.payload.ishome === true) {
                            setValue('/');
                        }
                        else {
                            setValue(newValue);
                        }

                    }}
                    showLabels
                >
                    <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} value='/' />
                    <BottomNavigationAction component={Link} to="/about" label="About" icon={<InfoIcon />} value='/about' />
                    <BottomNavigationAction component={Link} to="/work" label="Work" icon={<CodeIcon />} value='/work' />
                    <BottomNavigationAction component={Link} to="/demo" label="Demo" icon={<BuildIcon />} value='/demo' />
                    <BottomNavigationAction component={Link} to="/contact" label="Contact" icon={<EmailIcon />} value='/contact' />
                </ThemeBottomNavigation>
            </Hidden>
            <ThemeDrawer
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}>
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

const mapStateToProps = (state) => {
    if (state.ishome === true) {
        return {
            isHome: state.ishome
        }
    }
    return state;

}

export default connect(logoClicked, { mapStateToProps })(Menu);
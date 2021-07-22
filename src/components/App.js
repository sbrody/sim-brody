import React from 'react';
import Hero from './Hero';
import Demo from './demo/Demo';
import { styled, Box } from '@material-ui/core';
import Menu from './Menu';
import About from './About';
import Work from './Work';


const ThemeBox = styled(Box)({
    paddingBottom: '4rem',
    color: '#050505',
    '& h1': {
        fontFamily: 'Bungee Shade, Roboto',
        fontSize: '4rem',
        marginBottom: '1rem'
    },
    '& h2': {
        fontSize: '2.5rem'
    },
    '& h3': {
        fontSize: '2.5rem',
        fontWeight: '600'
    }

})

const App = () => {
    return (
        <ThemeBox>
            <Menu />
            <Hero />
            <Demo />
            <About />
            <Work />
        </ThemeBox>
    )
};

export default App;
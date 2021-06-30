import React from 'react';
import Hero from './Hero';
import Demo from './demo/Demo';
import { styled, Box } from '@material-ui/core';



const ThemeBox = styled(Box)({
    color: '#050505',
    '& h1': {
        fontFamily: 'Merriweather, Roboto',
        fontSize: '4rem'
    },
    '& h2': {
        fontSize: '2.75rem'
    }

})

const App = () => {
    return (
        <ThemeBox>
            <Hero />
            <Demo />
        </ThemeBox>
    )
};

export default App;
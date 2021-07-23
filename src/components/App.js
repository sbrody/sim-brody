import React from 'react';
import Hero from './Hero';
import Demo from './demo/Demo';
import { styled, Box } from '@material-ui/core';
import Menu from './Menu';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MiniHeader from './MiniHeader';


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
        <Router>
            <ThemeBox>
                <Menu />
                <Route path={['/demo', '/about', '/work', '/contact']} component={MiniHeader} />
                <Switch>
                    <Route path="/" exact>
                        <Hero />
                    </Route>
                    <Route path="/demo">
                        <Demo />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/work">
                        <Work />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </ThemeBox>
        </Router>

    )
};

export default App;
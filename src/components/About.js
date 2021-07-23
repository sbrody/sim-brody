import React from 'react';
import { Typography, Container, styled } from '@material-ui/core';
import { Link } from 'react-router-dom';
import sim from '../images/sim.png';

const ThemeContainer = styled(Container)({
    margin: '0 auto',
    paddingTop: '4rem',
    maxWidth: '760px',
    '& h3': {
        marginBottom: '2rem'
    },
    '& p': {
        marginBottom: '1rem'
    }
});

const About = () => {
    return (
        <ThemeContainer>
            <img src={sim} alt="sim brody" style={{ display: 'block', margin: '2rem auto' }} />
            <Typography variant="h3">About me</Typography>

            <Typography>I'm an experienced and highly professional front-end developer, specialising in working with health organisations but also available for other select contracts. I've worked as a freelancer with agencies and directly with clients for the past 6 years. Before that I was head of design and technology at an international publishing company and have loads of business experience.</Typography>
            <Typography>
                I build sites and web apps using the tools that best meet the customer's need. But I often work with React, Redux, Gatsby and the headless CMS approach, where clients get to edit their content using a familiar platform such as WordPress but the front end of the site is delivered via the blazing fast <a href="https://jamstack.org/">JAMStack</a>.
            </Typography>
            <Typography>You can check out some of the additional intereactivity you can get working with technology such as React in <Link to='/demo'>my demo</Link>.</Typography>
            <Typography>I'm also friendly and approachable so do <Link to='/contact'>get in touch</Link> if you have a project we could work together on.</Typography>
        </ThemeContainer>
    )
}

export default About;
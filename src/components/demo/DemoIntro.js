import React from 'react';
import { Typography, Container, styled } from '@material-ui/core';

const IntroContainer = styled(Container)({
    marginBottom: '5rem',
    maxWidth: '760px',
    '& h3': {
        marginBottom: '1rem'
    }
});

const DemoIntro = () => {
    return (
        <IntroContainer>
            <Typography variant="h3">Web app interactivity</Typography>
            <Typography>Web apps, such as those created with React, offer lots of opportunities for interactivity with your customers or users. Play around with some of the controls below to see some simple examples.</Typography>
        </IntroContainer>
    )
};

export default DemoIntro;

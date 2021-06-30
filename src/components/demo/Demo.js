import React from 'react';
import DemoIntro from './DemoIntro';
import ColourPicker from './ColourPicker';
import { Container, styled } from '@material-ui/core'
import AnimationPicker from './AnimationPicker';

const ThemeContainer = styled(Container)({
    textAlign: 'center',
    alignItems: 'center',
    padding: '2rem 0'
})

const Demo = () => {
    return (
        <ThemeContainer>
            <DemoIntro />
            <ColourPicker />
            <AnimationPicker />
            Demo
        </ThemeContainer>
    )
}

export default Demo;
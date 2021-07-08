import React from 'react';
import { styled, Box, Typography, Container } from '@material-ui/core';
import Anime, { anime } from 'react-anime';
import dust_texture from './dust_texture.svg';

const HeroBox = styled(Box)({
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    '& .bg-outer': {
        position: 'absolute',
        zIndex: '-1',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
    },
    '& .bg-color': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        zIndex: '-1',
    },
    '& .bg2': {
        backgroundImage: 'radial-gradient(circle, #AAFCB8 17.5%, white, white)',

    },
    '& .bg1': {
        backgroundImage: 'radial-gradient(circle, rgba(204, 214, 235, 0.9) 5%, transparent, transparent)',

    },
    '& .anime0': {
        height: '100%'
    },
    '& .texture': {
        backgroundImage: `url(${dust_texture})`,
        maskImage: 'radial-gradient(circle, rgba(140, 215, 144, 0.6) 20%, transparent, transparent)',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        position: 'absolute',
        backgroundSize: '100px',
        backgroundRepeat: 'repeat'
    }
});

const TextContainer = styled(Container)({
    maxWith: '760px'
})


const Hero = () => {
    return (
        <HeroBox>
            <TextContainer maxWidth="md">
                <Typography variant='h1'>Sim Brody</Typography>
                <Typography variant='h2'>Web apps, React and front-end development for health and social care organisations</Typography>
            </TextContainer>

            <div className="bg-outer">
                <Anime
                    easing="easeInOutCubic"
                    duration={15000}
                    loop={true}
                    opacity={[0.5, 0.7, 1]}
                    className='anime'

                >
                    <div className="bg-color bg1"></div>
                </Anime>
                <div className="bg-color bg2"></div>
                <div className="texture">

                </div>
            </div>


        </HeroBox>
    )
};

export default Hero;
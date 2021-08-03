import React from 'react';
import { Typography, styled } from '@material-ui/core';


const MiniHeader = () => {

    const HeaderTypography = styled(Typography)({
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        fontFamily: 'Bungee Shade, Roboto',
        fontSize: '1rem',
        zIndex: '10',
    });

    return (
        <HeaderTypography>Sim</HeaderTypography>
    )
};
export default MiniHeader;
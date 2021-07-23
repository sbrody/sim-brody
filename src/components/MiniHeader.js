import React from 'react';
import { Typography, styled } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MiniHeader = () => {

    const HeaderTypography = styled(Typography)({
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        fontFamily: 'Bungee Shade, Roboto',
        fontSize: '1rem',
        zIndex: '10',
    });

    return (
        <HeaderTypography>Sim</HeaderTypography>
    )
};
export default MiniHeader;
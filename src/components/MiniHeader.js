import React from 'react';
import { Typography, styled } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { logoClicked } from '../actions';

const MiniHeader = (props) => {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logoClicked(true))
    };

    const HeaderTypography = styled(Typography)({
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        fontFamily: 'Bungee Shade, Roboto',
        fontSize: '1rem',
        zIndex: '10',
    });

    return (
        <HeaderTypography><Link to="/" onClick={handleClick}>Sim</Link></HeaderTypography>
    )
};

export default connect(logoClicked, {})(MiniHeader);
import React, { useState } from 'react';
import { Typography, Container, styled, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { pickColour } from '../../actions';
import { connect, useDispatch } from 'react-redux';

const ColourPicker = (props) => {
    console.log()
    // const [colour, setColour] = useState('');
    const colour = '';
    const dispatch = useDispatch();

    const selectColour = (event) => {
        console.log(event.target.value);
        dispatch(pickColour(event.target.value));
        // setColour(event.target.value);
        console.log('colour' + props.colour.colour);
    }

    return (
        <Container>
            <FormControl>
                <InputLabel id="colour-picker-label">Pick a colour</InputLabel>
                <Select labelId="colour-picker-label"
                    id="colour-picker"
                    value={colour}
                    onChange={selectColour}
                >
                    <MenuItem value={'red'}>Red</MenuItem>
                    <MenuItem value={'green'}>Green</MenuItem>
                    <MenuItem value={'blue'}>Blue</MenuItem>
                </Select>
            </FormControl>
            Selected colour: {props.colour.colour}
        </Container>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    if (state) {
        return { colour: state.colour }
    }
    return;
}

export default connect(mapStateToProps, { pickColour })(ColourPicker);
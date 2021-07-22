import React from 'react';
import { Typography, Container, styled, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { pickColour } from '../../actions';
import { connect, useDispatch } from 'react-redux';

const ThemeFormControl = styled(FormControl)({
    width: '240px',
    display: 'flex',
    margin: '2rem auto'
});

const ColourPicker = (props) => {
    console.log()
    // const [colour, setColour] = useState('');

    const dispatch = useDispatch();

    const selectColour = (event) => {
        console.log(event.target.value);
        dispatch(pickColour(event.target.value));
    }

    return (
        <Container>
            <ThemeFormControl>
                <InputLabel id="colour-picker-label">Pick a colour</InputLabel>
                <Select labelId="colour-picker-label"
                    id="colour-picker"
                    value={props.colour.selection}
                    onChange={selectColour}
                >
                    <MenuItem value={'red'}>Red</MenuItem>
                    <MenuItem value={'green'}>Green</MenuItem>
                    <MenuItem value={'blue'}>Blue</MenuItem>
                </Select>
            </ThemeFormControl>
        </Container>
    )
}

const mapStateToProps = (state) => {

    if (state) {
        return { colour: state.colour }
    }
    return;
}

export default connect(mapStateToProps, { pickColour })(ColourPicker);
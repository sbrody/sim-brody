import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Container, Typography } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import { selectSector } from '../../actions';



const SectorPicker = (props) => {

    const [selectedSector, setSeletedSector] = useState(null)

    const dispatch = useDispatch();

    const handleChange = (event) => {
        console.log(event.target.value);
        console.log(props);
        setSeletedSector(event.target.value);
        dispatch(selectSector(event.target.value));
    };

    return (
        <Container style={{ textAlign: 'center' }}>
            <FormControl component="fieldset">
                <FormLabel component="legend">What sector do you work in?</FormLabel>
                <RadioGroup aria-label="pick a sector" name="sector" value={selectedSector} onChange={handleChange}>
                    <FormControlLabel value="health" control={<Radio />} label="Health" />
                    <FormControlLabel value="tech" control={<Radio />} label="Tech" />
                    <FormControlLabel value="media" control={<Radio />} label="Media" />
                    <FormControlLabel value="finance" control={<Radio />} label="Finance" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            {/* Animal: {props.animal.query.search.title} */}
        </Container>
    )
};

const mapStateToProps = (state) => {
    if (state.sector) {
        return {
            sector: state.sector.sector
        };
    }
    return state;
};


export default connect(mapStateToProps, { selectSector })(SectorPicker);
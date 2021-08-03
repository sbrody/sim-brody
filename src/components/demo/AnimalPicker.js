import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Container } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import { selectAnimal } from '../../actions';



const AnimalPicker = (props) => {

    const dispatch = useDispatch();

    const value = () => {
        if (props.animal) {
            return props.animal;
        }
        return 'Cat';
    }


    const handleChange = (event) => {
        console.log(event.target.value);
        console.log(props.animal);
        dispatch(selectAnimal(event.target.value));
    };

    return (
        <Container style={{ textAlign: 'center' }}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Which are your favourite?</FormLabel>
                <RadioGroup aria-label="favourite animal" name="animal" value={value()} onChange={handleChange}>
                    <FormControlLabel value="Cat" control={<Radio />} label="Cats" />
                    <FormControlLabel value="Dog" control={<Radio />} label="Dogs" />
                    <FormControlLabel value="Bird" control={<Radio />} label="Birds" />
                </RadioGroup>
            </FormControl>
            {/* Animal: {props.animal.query.search.title} */}
        </Container>
    )
};

const mapStateToProps = (state) => {
    if (state.animal.selection) {
        return {
            animal: state.animal.selection.query.search[0].title
        };
    }
    return state;
};


export default connect(mapStateToProps, { selectAnimal })(AnimalPicker);
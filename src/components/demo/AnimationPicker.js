import React from 'react';
import { Container, Switch, FormControlLabel } from '@material-ui/core';
import { selectAnimation } from '../../actions';
import { connect, useDispatch } from 'react-redux';

const AnimationPicker = (props) => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // selectAnimation(event.checked);
        dispatch(selectAnimation(event.target.checked));
        console.log(event.target);
    };

    return (
        <Container style={{ textAlign: 'center' }}>
            <FormControlLabel
                control={
                    <Switch
                        checked={props.checked}
                        onChange={handleChange}
                        name="animationCheck"
                        inputProps={{ 'aria-label': 'animation checkbox' }}
                        color="primary"
                    />
                }
                label="Activate animation"
            />
        </Container>
    )
}

const mapStateToProps = (state) => {
    if (state.selection) {
        return {
            checked: state.selection
        }
    }
    return state;
}

export default connect(mapStateToProps, { selectAnimation })(AnimationPicker);
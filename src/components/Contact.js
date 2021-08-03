import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Typography, TextField, Button, Container, styled } from '@material-ui/core';

const Contact = () => {

    const FormContainer = styled(Container)({
        maxWidth: '760px',
        margin: '0 auto',
        paddingTop: '5rem'
    });

    const ThemeTextField = styled(TextField)({
        width: '100%',
        margin: '1rem 0',
    })

    const [state, handleSubmit] = useForm("xpzkjndg");
    console.log(state);
    if (state.succeeded) {
        return (
            <Typography>Thanks for your message - I'll be in touch soon!</Typography>
        )
    }

    return (
        <FormContainer>
            <Typography variant="h3">Contact me</Typography>
            <Typography>Drop me a line using the form below</Typography>
            <form onSubmit={handleSubmit}>
                <ThemeTextField required id="name" label="Name" name="name" />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <ThemeTextField required id="email" label="Email" name="email" />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <ThemeTextField required multiline id="message" label="Message" name="message" />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button style={{ marginTop: '2rem' }} variant="contained" color="primary" type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </form>
        </FormContainer>

    )

}

export default Contact
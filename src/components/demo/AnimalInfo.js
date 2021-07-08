import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Link, styled } from '@material-ui/core';
import parse from 'html-react-parser';

const AnimalCard = styled(Card)({
    maxWidth: '400px'
});

const AnimalInfo = (props) => {

    if (!props.selectedAnimal) {
        return null;
    }

    // const animalPhoto = () => {
    //     Photo by < a href = "https://unsplash.com/@ejleusink?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Erik - Jan Leusink</a > on < a href = "https://unsplash.com/s/photos/tabby-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Unsplash</a >

    //         Photo by < a href = "https://unsplash.com/@marliesebrandsma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Marliese Streefland</a > on < a href = "https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Unsplash</a >

    //             Photo by < a href = "https://unsplash.com/@janmeeus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Jan Meeus</a > on < a href = "https://unsplash.com/s/photos/bird?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" > Unsplash</a >

    // }

    const itemNumber = () => {
        console.log(props.selectedAnimal);
        switch (props.selectedAnimal.query.search[0].title) {
            case 'Dog':
                return 0;

            case 'Bird':
                return 0;

            default:
                return 9;
        }
    }

    return (
        <Container>
            <AnimalCard>
                <CardContent>
                    <Typography>{parse(props.selectedAnimal.query.search[itemNumber()].snippet)}...</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link href={`https://en.wikipedia.org/?curid=${props.selectedAnimal.query.search[itemNumber()].pageid}`}>Read more</Link>
                    </Button>
                </CardActions>
            </AnimalCard>
        </Container>
    )
}

const mapStateToProps = (state) => {
    if (state.animal.selection) {
        return {
            selectedAnimal: state.animal.selection
        }
    }
    return state;

}

export default connect(mapStateToProps, {})(AnimalInfo);
import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, CardActions, CardContent, CardMedia, Button, Typography, Link, styled } from '@material-ui/core';
import parse from 'html-react-parser';
import bird from '../../images/bird.jpg';
import dog from '../../images/dog.jpg';
import cat from '../../images/tabby.jpg';


const AnimalCard = styled(Card)({
    maxWidth: '400px'
});

const AnimalCardMedia = styled(CardMedia)({
    height: '200px'
});

const AnimalInfo = (props) => {

    if (!props.selectedAnimal) {
        return null;
    }


    const animalPhoto = () => {
        switch (props.selectedAnimal.query.search[0].title) {
            case 'Dog':
                return (
                    <AnimalCardMedia
                        image={dog}
                        title='dog'
                    />
                );
            case 'Bird':
                return (
                    <AnimalCardMedia
                        image={bird}
                        title='bird'
                    />
                );
            default:
                return (
                    <AnimalCardMedia
                        image={cat}
                        title='cat'
                    />
                );

        }
    }


    const itemNumber = () => {
        console.log(props.selectedAnimal.query);
        switch (props.selectedAnimal.query.search[0].title) {
            case 'Dog':
                return 0;

            case 'Bird':
                return 0;

            default:
                return 2;
        }
    }

    return (
        <Container>
            <AnimalCard>
                {animalPhoto()}
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
import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Container, styled } from '@material-ui/core';
import { workData } from './workData';

const WorkCard = styled(Card)({
    maxWidth: '350px',
    margin: '3rem auto'
});

const WorkCardMedia = styled(CardMedia)({
    height: '240px',
    width: '100%'
});

const WorkCardContent = styled(CardContent)({
    padding: '2rem 1rem'
});

const WorkCardActionArea = styled(CardActionArea)({
    display: 'flex',
    flexDirection: 'column'
});

const CardContainer = styled(Container)({
    display: 'flex',
    flexWrap: 'wrap'
});

const ThemeContainer = styled(Container)({
    margin: '5rem auto',
    maxWidth: '760px',
    '& h3': {
        marginBottom: '2rem'
    },
    '& p': {
        marginBottom: '1rem'
    }
});

const Work = () => {

    const mappedData = workData.map((data) => {
        return (
            <WorkCard key={data.title}>
                <WorkCardActionArea href={data.url}>
                    <WorkCardMedia
                        image={data.image}
                        title={data.title}
                    />
                    <WorkCardContent>
                        <Typography variant="h5">{data.title}</Typography>
                        <Typography>{data.text}</Typography>
                    </WorkCardContent>
                </WorkCardActionArea>
            </WorkCard>
        )
    })

    return (
        <Container>
            <ThemeContainer>
                <Typography variant="h3">Work</Typography>
                <Typography>I've been lucky enough to work with some great clients on some really interesting projects. Here are a few of them:</Typography>
            </ThemeContainer>
            <CardContainer>
                {mappedData}
            </CardContainer>
        </Container>



    )
}

export default Work;
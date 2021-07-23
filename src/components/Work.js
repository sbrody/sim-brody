import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Container, styled, Grid } from '@material-ui/core';
import { workData } from './workData';


const WorkCard = styled(Card)({
    maxWidth: '350px',
    height: '100%'
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
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start'
});

const CardGrid = styled(Grid)({
    justifyContent: 'center'
});

const ThemeContainer = styled(Container)({
    margin: '0 auto',
    paddingTop: '5rem',
    maxWidth: '760px',
    '& h3': {
        marginBottom: '2rem'
    },
    '& p': {
        marginBottom: '3rem'
    }
});

const Work = () => {

    const mappedData = workData.map((data) => {
        return (
            <Grid key={data.title} item>
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
            </Grid>

        )
    })

    return (
        <Container>
            <ThemeContainer>
                <Typography variant="h3">Work</Typography>
                <Typography>I've been lucky enough to work with some great clients on some really interesting projects. Here are a few of them:</Typography>
            </ThemeContainer>
            <CardGrid container spacing={4}>
                {mappedData}
            </CardGrid>
        </Container>



    )
}

export default Work;
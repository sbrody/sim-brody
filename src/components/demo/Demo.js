import React from 'react';
import DemoIntro from './DemoIntro';
import ColourPicker from './ColourPicker';
import { Container, styled, Grid } from '@material-ui/core'
import AnimationPicker from './AnimationPicker';
import AnimalPicker from './AnimalPicker';
import AnimalInfo from './AnimalInfo';
import SectorPicker from './SectorPicker';
import SectorChart from './SectorChart';
import Comet from './Comet';
import { connect } from 'react-redux';



const Demo = (props) => {

    const ThemeContainer = styled(Container)({
        alignItems: 'center',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative',
        width: '100%',
    });

    const selectedColourRefiner = () => {
        switch (props.selectedColour) {
            case 'red':
                return '#F2CABA';
            case 'green':
                return '#c3fdcc';
            case 'blue':
                return '#E1EDF4';
            default:
                return '#eee'
        }
    }

    const ThemeGridItem = styled(Grid)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #fff',
        backgroundColor: selectedColourRefiner(),
        minHeight: '320px',
        width: '100%',
        '@media (max-width: 550px)': {
            flexDirection: 'column',
            '& >div': {
                padding: '2rem 0',
                display: 'flex',
                justifyContent: 'center'
            }
        }


    });


    return (
        <ThemeContainer>
            <Comet />
            <DemoIntro />
            <Grid container spacing={6}>
                <ThemeGridItem item lg={6}>
                    <ColourPicker />
                </ThemeGridItem>
                <ThemeGridItem item lg={6}>
                    <AnimationPicker />
                </ThemeGridItem>
                <ThemeGridItem item lg={6}>
                    <AnimalPicker />
                    <AnimalInfo />
                </ThemeGridItem>
                <ThemeGridItem item lg={6}>
                    <SectorPicker />
                    <SectorChart />
                </ThemeGridItem>
            </Grid>
        </ThemeContainer>
    )
}

const mapStateToProps = (state) => {
    if (state.colour.selection) {
        return {
            selectedColour: state.colour.selection
        }
    }
    else return {
        selectedColour: '#eee'
    }

}

export default connect(mapStateToProps)(Demo);
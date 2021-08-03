import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { connect } from 'react-redux';
import { Container, styled } from '@material-ui/core';


const SectorChart = (props) => {

    const ChartContainer = styled(Container)({
        '@media (max-width: 1280px)': {
            minWidth: '50%'
        }
    });

    // need to turn state object into array of objects to be compatible with recharts
    const sectorData = [];
    Object.keys(props.data).forEach(key => sectorData.push({
        name: key,
        value: props.data[key]
    }));
    console.log(sectorData);
    // remove persist element from array
    const finalArray = sectorData.slice(0, sectorData.length - 1);
    console.log(finalArray);

    return (
        <ChartContainer>
            <BarChart
                width={360}
                height={280}
                data={finalArray}
                margin={5}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#348AA7" />
            </BarChart>
        </ChartContainer>


    )
}

const mapStateToProps = (state) => {
    return {
        data: state.sector
    }
}

export default connect(mapStateToProps)(SectorChart);
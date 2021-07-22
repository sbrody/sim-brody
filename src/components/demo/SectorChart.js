import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';



const SectorChart = (props) => {

    console.log(props.data);

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
        <BarChart
            width={360}
            height={320}
            data={finalArray}
            margin={5}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#348AA7" />
        </BarChart>

    )
}

const mapStateToProps = (state) => {
    return {
        data: state.sector
    }
}

export default connect(mapStateToProps)(SectorChart);
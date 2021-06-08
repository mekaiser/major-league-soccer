import React from 'react';

const SelectionInfo = (props) => {
    const eachPlayer = props.eachPlayer;
    
    return (
        <div>
            <h5>{props.count}. {eachPlayer.name}</h5>
            <p>Salary: ${eachPlayer.salary}</p>
        </div>
    );
};

export default SelectionInfo;
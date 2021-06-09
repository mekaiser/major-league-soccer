import React from 'react';
import SelectionInfo from '../SelectionInfo/SelectionInfo';

const Selection = (props) => {
    const selectedPlayer = props.selectedPlayer;
    let count = 1;
    const totalBudgetCalculated = selectedPlayer.reduce((totalBudget, each) => totalBudget + Number(each.salary), 0);
    const totalBudgetFinal = totalBudgetCalculated.toFixed(2);

    return (
        <div>
            <h3>Selected List</h3>
            <hr />
            <h4 style={{color: "#28a745"}}>Selected: {selectedPlayer.length}</h4>
            <h4 style={{color: "#ff6700"}}>Total budget: ${totalBudgetFinal}</h4>
            <br/>
            {
                selectedPlayer.map(eachPlayer => 
                    <SelectionInfo key={eachPlayer.id} eachPlayer={eachPlayer}
                    count={count++}></SelectionInfo>
                    )
            }
        </div>
    );
};

export default Selection;
import React from "react";
import { connect } from "react-redux";

function ListItem({item, dispatch}) {
    console.log(item);
    function updateState(){
        console.log("change state");
        dispatch({
            type: 'changeStateElement',
            index: item.id
        })
    }

    return(
        <div >
            <p>________________________________</p>
            <input type="checkbox" onChange={updateState}/>
            <h1>{item.message}</h1>
            <h2>{item.date.toLocaleString()}</h2>
            <p>________________________________</p>
        </div>
    );
}
export default connect()(ListItem);
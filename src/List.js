import {connect} from "react-redux";
import React from "react";
import ListItem from "./ListItem";

function List({items}) {
    return (

        <div id="liste">
            <h1>Liste des items</h1>
            <div id="items">
                {items.map(item => {
                    return <ListItem item={item} key={item.id}/>
                 })}
            </div>
        </div>

    );
}


const mapStateToProps = function (state) {
    return {
        items: state.items
    };
};
export default connect(mapStateToProps)(List);
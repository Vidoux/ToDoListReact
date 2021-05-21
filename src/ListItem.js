import React from "react";
import { connect } from "react-redux";

function ListItem({message, date}) {
 return(
     <h1>{message} à cette date: {date}</h1>
 );
}

const mapStateToProps = function (state) {
    return { message: state.message, date: state.message};
};

export default connect(mapStateToProps)(ListItem);

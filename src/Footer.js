import React from "react";
import {connect} from "react-redux";

function Footer({noms}) {
  return <footer>©team de {noms}</footer>;
}


const mapStateToProps = function (state) {
  return { noms: state.noms};
};

export default connect(mapStateToProps)(Footer);
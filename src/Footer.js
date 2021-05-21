import React from "react";
import {connect} from "react-redux";

function Footer({prenom, nom}) {
  return <footer>©team des meilleurs{nom}{prenom}</footer>;
}


const mapStateToProps = function (state) {
  return { nom: state.nom, prenom : state.prenom};
};

export default connect(mapStateToProps)(Footer);
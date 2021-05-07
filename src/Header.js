import React from "react";
import { connect } from "react-redux";

function Header({ date, nom, prenom }) {
  return (
    <h1>
      {nom}
      {prenom}
      {date.toLocaleString()}
    </h1>
  );
}

const mapStateToProps = function (state) {
  return { date: state.date, nom: state.nom, prenom: state.prenom };
};

export default connect(mapStateToProps)(Header);

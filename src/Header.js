import React from "react";
import { connect } from "react-redux";

function Header() {
  return (
      <h1>
        TODO List en React
      </h1>
  );
}


export default connect()(Header);

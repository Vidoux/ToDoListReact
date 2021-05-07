import React from "react";
import { connect } from "redux";

function List({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
}

const mapStateToProps = function (state) {
  return { items: state.items };
};

export default connect(mapStateToProps)(List);

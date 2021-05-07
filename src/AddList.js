import React from "react";
import { connect } from "react-redux";

function AddList() {
 const [input, setInput] = React.useState("");



  function updateInput(input){
    setInput(input);
  };

  function AddTodo(){

    setInput("");
  };

  return (
  	 <div>
        <input
          onChange={e => updateInput(e.target.value)}
          value={input}
        />
        <button className="add-todo" onClick={AddTodo}>
          Add Todo
        </button>
      </div>
  );
}

const mapStateToProps = function (state) {
  return {};
};

export default connect(mapStateToProps)(AddList);

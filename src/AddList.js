import React from "react";
import { connect } from "react-redux";



function AddList({dispatch, nbItem}) {
    const [input, setInput] = React.useState("");

    function AddTodo(){
        console.log("nbItem ", nbItem);
        if(input !== ""){
            dispatch({type: 'addTodo',
                item: {id: nbItem,message: input,
                    date: new Date(), checked: false}
            })
            console.log("add Todo", input);
            setInput("");
        }
    }

    return (
        <div>
            <input
                onChange={e => setInput(e.target.value)}
                value={input}
                id={"message"}
            />
            <button className="add-todo" onClick={AddTodo}>
                Add Todo
            </button>
        </div>
    );
}

const mapStateToProps = function (state) {
    return { nbItem: state.nbItem};
};

export default connect(mapStateToProps)(AddList);

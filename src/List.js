import {connect} from "react-redux";
import React from "react";
import ListItem from "./ListItem";

function List({items, dispatch, onlyChecked}) {
    function DisplayOnlyDone(){
        dispatch({
            type: 'ChangefilterOnlyChecked'
        })
    }

    return (

        <div id="liste">
            <h1>Liste des items</h1>
            <div>
                {/*N' Afficher ques les tâches terminées */}
                Seulement les tâches terminées<input type="checkbox" onChange={DisplayOnlyDone}/>

                <p>___________________________________</p>
            </div>
            <div id="items">
                {
                    items.map(item => {
                        if(onlyChecked === false || item.checked === true){
                            return <ListItem item={item} key={item.id}/>
                        }
                    })

                }
            </div>
        </div>

    );
}


const mapStateToProps = function (state) {
    return {
        items: state.items,
        onlyChecked: state.onlyChecked
    };
};
export default connect(mapStateToProps)(List);
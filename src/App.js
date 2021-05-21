import React from "react";
import Header from "./Header.js";
import AddList from "./AddList.js";
import List from "./List";
import Footer from "./Footer";

function App() {
    return (
        <React.Fragment>
            <Header />
            <AddList />
            <List />
            <Footer />
        </React.Fragment>
    );
}

export default App;
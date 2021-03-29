import React from "react";
import "./style.css"
import Card from "./Cards.jsx";
import Navbar from "./Navbar.jsx";
import Sdata from "./Sdata.jsx";

function App() {
    return (
            Sdata.map((val) => {
                return (
                    <Card
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                );
            })
        
    );
}

export default App;
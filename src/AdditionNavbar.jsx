import React from "react";
import "./navbar.css"
import Sdata from "./Sdata.jsx";


function AdditionNavbar() {
    return(
        <>
        <div className="add-navbar">
        <h3> Total Movies : {Sdata.length}</h3>
        </div>

        
        </>
    );
}

export default AdditionNavbar ;
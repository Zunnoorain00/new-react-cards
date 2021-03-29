import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import Card from "./Cards.jsx";
import Navbar from "./Navbar.jsx";
import Sdata from "./Sdata.jsx";
import AdditionNavbar from "./AdditionNavbar";
import App from "./App.jsx"



ReactDOM.render(
  <>
    <Navbar />
    <AdditionNavbar />
    <App />
  </>,
  document.getElementById("root")
)
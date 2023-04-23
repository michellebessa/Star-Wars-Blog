//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/navbar.css";
import "../styles/cards-characters.css";
import "../styles/cards-planets.css";
import "../styles/characters-page.css";
import "../styles/pages.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/components.css"
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));


import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Header from "./components/Header/Header.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Header />
    <NavBar />
    <div className="main_container">
      <div className="main_content">
        <div className="main_section"></div>
      </div>
    </div>
  </React.Fragment>
);
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Header from "./components/Header/Header.tsx";
import NavigationBar from "./components/NavigationBar/NavigationBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Header />
    <NavigationBar />
  </React.Fragment>
);
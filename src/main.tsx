import React, { useState } from "react";
import { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Header from "./components/Header/Header.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import PlaybackBar from "./components/PlaybackBar/PlaybackBar.tsx";
import PrincipalContent from "./components/PrincipalContent/PrincipalContent.tsx";

type Props = {
  children: ReactNode;
};

function Layout(props: Props) {
  //This status is for setting the sidebar mode
  const [sidebarMode, setSidebarMode] = useState<"compact" | "expanded">("compact");

  //This function toggles between compact and expanded sidebar mode
  const toggleSidebar = () => {
    setSidebarMode(prevSidebarMode => prevSidebarMode === "compact" ? "expanded" : "compact");
  }
  
  return (
    <>
      <Header onToggleSidebar={toggleSidebar}/>
      <SideBar size={sidebarMode} />
      {props.children}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Layout>
      <PlaybackBar />
      <PrincipalContent />
    </Layout>
  </React.Fragment>
);

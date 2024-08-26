import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Layout from "./components/Layout/Layout.tsx";
import PlaybackBar from "./components/PlaybackBar/PlaybackBar.tsx";
import PrincipalContent from "./components/PrincipalContent/PrincipalContent.tsx";

function Main() {
  //This status is for setting the sidebar mode
  const [sidebarMode, setSidebarMode] = useState<"compact" | "expanded">(
    "compact"
  );

  //This function toggles between compact and expanded sidebar mode
  const toggleSidebar = () => {
    setSidebarMode((prevSidebarMode) =>
      prevSidebarMode === "compact" ? "expanded" : "compact"
    );
  };

  return (
    <Layout setSidebarMode={toggleSidebar} sidebarMode={sidebarMode}>
      <PlaybackBar />
      <PrincipalContent />
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);

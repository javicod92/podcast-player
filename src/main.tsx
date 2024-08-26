import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Layout from "./components/Layout/Layout.tsx";
import PlaybackBar from "./components/PlaybackBar/PlaybackBar.tsx";
import Home from "./components/Home/Home.tsx";
import PlaylistAdd from "./components/PlaylistAdd/PlaylistAdd.tsx";

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

  //This status is used to open or close the Add Playlist window
  const [isPlaylistAddOpen, setIsPlaylistAddOpen] = useState<boolean>(false);

  const togglePlayListAdd = () => {
    setIsPlaylistAddOpen((prevState) => (prevState ? false : true));
  };

  return (
    <Layout
      setIsPlaylistAddOpen={togglePlayListAdd}
      setSidebarMode={toggleSidebar}
      sidebarMode={sidebarMode}
    >
      <PlaybackBar />
      {!isPlaylistAddOpen ? <Home /> : <PlaylistAdd />}
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);

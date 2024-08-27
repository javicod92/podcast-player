import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Layout from "./components/Layout/Layout.tsx";
import PlaybackBar from "./components/PlaybackBar/PlaybackBar.tsx";
import Home from "./components/Home/Home.tsx";
import PlaylistAdd from "./components/PlaylistAdd/PlaylistAdd.tsx";

function Main() {
  //This status is used to open or close the Add Playlist or Home components
  const [isPlaylistAddOpen, setIsPlaylistAddOpen] = useState<boolean>(false);

  return (
    <Layout
      setIsPlaylistAddOpen={setIsPlaylistAddOpen}
    >
      <PlaybackBar />
      {!isPlaylistAddOpen ? <Home /> : <PlaylistAdd />}
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);

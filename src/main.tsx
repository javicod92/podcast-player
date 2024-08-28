import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Layout from "./components/Layout/Layout.tsx";
import PlaybackBar from "./components/PlaybackBar/PlaybackBar.tsx";
import Home from "./components/Home/Home.tsx";
import PlaylistAdd from "./components/PlaylistAdd/PlaylistAdd.tsx";
import { userPlaylist } from "./components/Logic/DataBaseSimulation.ts";

type ItemList = {
  title: string;
  description: string;
  imageUrl: string;
};

function Main() {
  //This status is used to open or close the Add Playlist or Home components
  const [isPlaylistAddOpen, setIsPlaylistAddOpen] = useState<boolean>(false);

  //This state is in main function becuse I need to send it to Layout and PlaylistAdd components
  const [items, setItems] = useState<ItemList[]>(userPlaylist);

  return (
    <Layout setIsPlaylistAddOpen={setIsPlaylistAddOpen} items={items}>
      <PlaybackBar />
      {!isPlaylistAddOpen ? (
        <Home />
      ) : (
        <PlaylistAdd
          setItems={setItems}
          setIsPlaylistAddOpen={setIsPlaylistAddOpen}
        />
      )}
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);

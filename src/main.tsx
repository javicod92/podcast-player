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

  //These states are used to identify the audio that is currently selected
  const [currentSongId, setCurrentSongId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleSongClick = (id: number) => {
    if (currentSongId === id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSongId(id);
      setIsPlaying(true);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Layout setIsPlaylistAddOpen={setIsPlaylistAddOpen} items={items}>
      <PlaybackBar isPlaying={isPlaying} onPlayPause={handlePlayPause} />
      {!isPlaylistAddOpen ? (
        <Home
          currentSongId={currentSongId}
          isPlaying={isPlaying}
          onSongClick={handleSongClick}
        />
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

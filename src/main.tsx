import { useRef, useState } from "react";
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

type audioTypes = {
  id: number;
  title: string;
  description: string;
  channel: {
    urls: {
      logo_image: {
        original: string;
      };
    };
  };
  urls: {
    high_mp3: string;
  };
};

function Main() {
  //This status is used to open or close the Add Playlist or Home components
  const [isPlaylistAddOpen, setIsPlaylistAddOpen] = useState<boolean>(false);

  //This state is in main function becuse I need to send it to Layout and PlaylistAdd components
  const [items, setItems] = useState<ItemList[]>(userPlaylist);

  //These states are used to identify the audio that is currently selected
  const [currentSong, setCurrentSong] = useState<audioTypes | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handlePlayPause() {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleSongSelect(song: audioTypes) {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.src = song.urls.high_mp3;
      audioRef.current.play();
    }
    setIsPlaying(true);
  }

  return (
    <Layout setIsPlaylistAddOpen={setIsPlaylistAddOpen} items={items}>
      <PlaybackBar
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        currentSong={currentSong}
      />
      {!isPlaylistAddOpen ? (
        <Home
          currentSongId={currentSong?.id}
          isPlaying={isPlaying}
          onSongSelect={handleSongSelect}
        />
      ) : (
        <PlaylistAdd
          setItems={setItems}
          setIsPlaylistAddOpen={setIsPlaylistAddOpen}
        />
      )}
      <audio ref={audioRef} />
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);

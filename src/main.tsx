import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Layout from "./components/Layout/Layout.tsx";
import PlaybackBar from "./components/PlaybackBar/PlaybackBar.tsx";
import Home from "./components/Home/Home.tsx";
import PlaylistAdd from "./components/PlaylistAdd/PlaylistAdd.tsx";
import { userPlaylist } from "./components/Logic/DataBaseSimulation.ts";
import { audioTypes } from "./components/Logic/audioTypes.ts";

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
  const [currentSong, setCurrentSong] = useState<audioTypes | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration > 0) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

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
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.src = song.urls.high_mp3;
      audioRef.current.play();
    }
    setIsPlaying(true);
  }

  function handleProgressChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newProgress = Number(event.target.value);
    setProgress(newProgress);

    if (audioRef.current) {
      audioRef.current.currentTime =
        (newProgress / 100) * audioRef.current.duration;
    }
  }

  return (
    <Layout setIsPlaylistAddOpen={setIsPlaylistAddOpen} items={items}>
      <PlaybackBar
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        progress={progress}
        onProgressChange={handleProgressChange}
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

import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import Layout from "./components/Layout/Layout.tsx";
import PlaybackBar from "./components/PlaybackBar/PlaybackBar.tsx";
import Home from "./components/Home/Home.tsx";
import PlaylistAdd from "./components/PlaylistAdd/PlaylistAdd.tsx";
import { userPlaylist } from "./components/Logic/DataBaseSimulation.ts";
import { audioTypes } from "./components/Logic/audioTypes.ts";
import useFetchData from "./customHooks/useFetchData.tsx";

const API_URL = "https://api.audioboom.com/audio_clips";

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

  //These states and code lines are used to manage sound playback
  const {
    data: data1,
    isLoading: isLoading1,
    error: error1,
  } = useFetchData(API_URL, 1);
  const {
    data: data2,
    isLoading: isLoading2,
    error: error2,
  } = useFetchData(API_URL, 2);
  const dataSongs = [...data1, ...data2];
  const isLoading = isLoading1 || isLoading2;
  const error = error1 || error2;

  const [currentSong, setCurrentSong] = useState<audioTypes | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!currentSong && dataSongs.length > 0 && audioRef.current) {
      setCurrentSong(dataSongs[0]);
      audioRef.current.src = dataSongs[0].urls.high_mp3;
    }
  }, [dataSongs]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration > 0) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setElapsedTime(audio.currentTime);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  function handlePlayPause() {
    if (currentSong) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  function handleNextAudio() {
    if (currentSong) {
      const audioIndex = dataSongs.findIndex(
        (audio) => audio.id === currentSong.id
      );
      if (audioIndex < dataSongs.length - 1) {
        console.log(`El indice de la cancion es el: ${audioIndex}`);
        handleSongSelect(dataSongs[audioIndex + 1]);
      }
      if (audioIndex === dataSongs.length - 1) {
        handleSongSelect(dataSongs[0]);
      }
    }
  }

  function handlePreviousAudio() {
    if (currentSong) {
      const audioIndex = dataSongs.findIndex(
        (audio) => audio.id === currentSong.id
      );
      if (audioIndex > 0) {
        console.log(`El indice de la cancion es el: ${audioIndex}`);
        handleSongSelect(dataSongs[audioIndex - 1]);
      }
      if (audioIndex === 0) {
        handleSongSelect(dataSongs[dataSongs.length - 1]);
      }
    }
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
        handleNextAudio={handleNextAudio}
        handlePreviousAudio={handlePreviousAudio}
        elapsedTime={elapsedTime}
      />
      {!isPlaylistAddOpen ? (
        <Home
          dataSongs={dataSongs}
          isLoading={isLoading}
          error={error}
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

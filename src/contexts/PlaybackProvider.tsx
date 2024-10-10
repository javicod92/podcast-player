import React, { createContext, useState, useEffect, useRef } from "react";
import { audioTypes } from "../components/Logic/audioTypes";
import useFetchData from "../customHooks/useFetchData";

// Context data definitions
type SongContextType = {
  dataSongs: audioTypes[];
  isLoading: boolean;
  error: boolean;
  currentSong: audioTypes | null;
  isPlaying: boolean;
  progress: number;
  elapsedTime: number;
  isPlaybackBarEnabled: boolean;
  handlePlayPause: () => void;
  handleNextAudio: () => void;
  handlePreviousAudio: () => void;
  handleDisablePlaybackBar: () => void;
  handleSongSelect: (song: audioTypes) => void;
  handleProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Creating context
export const SongContext = createContext<SongContextType | undefined>(
  undefined
);

export default function PlaybackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //This code is used to manage Data and Errors
  const API_URL = "https://api.audioboom.com/audio_clips";
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

  //This state is used to enable or disabled the PlaybackBar component
  const [isPlaybackBarEnabled, setIsPlaybackBarEnabled] =
    useState<boolean>(false);
  const handleDisablePlaybackBar = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
    setIsPlaybackBarEnabled(false);
  };

  //This code is used to manage the functions of the song
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

    const handleAudioEnd = () => {
      handleNextAudio();
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleAudioEnd);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, [currentSong]);

  const handlePlayPause = () => {
    if (currentSong) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextAudio = () => {
    if (currentSong) {
      const audioIndex = dataSongs.findIndex(
        (audio) => audio.id === currentSong.id
      );
      if (audioIndex < dataSongs.length - 1) {
        handleSongSelect(dataSongs[audioIndex + 1]);
      } else {
        handleSongSelect(dataSongs[0]);
      }
    }
  };

  const handlePreviousAudio = () => {
    if (currentSong) {
      const audioIndex = dataSongs.findIndex(
        (audio) => audio.id === currentSong.id
      );
      if (audioIndex > 0) {
        handleSongSelect(dataSongs[audioIndex - 1]);
      } else {
        handleSongSelect(dataSongs[dataSongs.length - 1]);
      }
    }
  };

  const handleSongSelect = (song: audioTypes) => {
    if (currentSong?.id === song.id) {
      setIsPlaybackBarEnabled(true);
      handlePlayPause();
    } else {
      setCurrentSong(song);
      setProgress(0);
      setElapsedTime(0);
      setIsPlaybackBarEnabled(true);
      if (audioRef.current) {
        audioRef.current.src = song.urls.high_mp3;
        audioRef.current.play();
      }
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(event.target.value);
    setProgress(newProgress);

    if (audioRef.current) {
      audioRef.current.currentTime =
        (newProgress / 100) * audioRef.current.duration;
    }
  };

  return (
    <SongContext.Provider
      value={{
        dataSongs,
        isLoading,
        error,
        currentSong,
        isPlaying,
        progress,
        elapsedTime,
        handlePlayPause,
        handleNextAudio,
        handlePreviousAudio,
        isPlaybackBarEnabled,
        handleSongSelect,
        handleProgressChange,
        handleDisablePlaybackBar,
      }}
    >
      {children}
      <audio ref={audioRef} />
    </SongContext.Provider>
  );
}

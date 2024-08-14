import styles from "./PlayListAndSongTitle.module.css"
import convertNumber from "../Logic/convertNumber.ts"


type Props = {
  isAlbum: boolean;
  artist: string;
  playlistName?: string;
  songName?: string;
  songs?: number;
  views?: number;
}

export default function PlayListAndSongTitle (props: Props) {
  const transformTotalSongs = convertNumber(props.songs || 0);
  const transformTotalViews = convertNumber(props.views || 0);

  if (props.isAlbum) {
    return (
      <div className={styles.albumTitle_container}>
        <h2>{props.playlistName}</h2>
        <p>{`${props.artist} • ${transformTotalSongs} songs`}</p>
      </div>
    )
  } else {
    return (
      <div className={styles.albumTitle_container}>
        <h2>{props.songName}</h2>
        <p>{`${props.artist} • ${transformTotalViews} views`}</p>
      </div>
    )
  }
}
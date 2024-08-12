import styles from "./SongCard.module.css"

type Props = {
  imageUrl: string;
  songTitle: string;
  artist: string;
  views: string;
  likes: string;
}

export default function SongCard (props: Props) {
  return (
    <div className={styles.songCard_container}>
      <img src={props.imageUrl} alt="Artist Album" className={styles.artist_image}/>
      <div className={styles.artist_description}>
        <div className={styles.description_text}>
          <p className={styles.songTitle}>{props.songTitle}</p>
          <p className={styles.artistName}>{props.artist} • {props.views} views • {props.likes} likes</p>
        </div>
      </div>
    </div>
  )
}
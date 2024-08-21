import styles from "./ArtistProfile.module.css";
import convertNumber from "../Logic/convertNumber.ts";

type Props = {
  isAlbum: boolean;
  imageUrl: string;
  artist: string;
  playlistName?: string;
  subscriberNumber: number;
};

export default function ArtistProfile(props: Props) {
  const subscribeNumberConverted = convertNumber(props.subscriberNumber);

  return (
    <div className={styles.artistProfile_container}>
      <img
        className={props.isAlbum ? styles.album_image : styles.artist_image}
        src={props.imageUrl}
        alt="Artist Cover"
      />
      <div
        className={
          props.isAlbum
            ? styles.description_container_album
            : styles.description_container_artist
        }
      >
        {!props.isAlbum && (
          <>
            <p className={styles.font_bold}>{props.artist}</p>
            <p className={styles.font_normal}>
              {subscribeNumberConverted} Subscribers
            </p>
          </>
        )}
        {props.isAlbum && (
          <>
            <p className={styles.font_bold}>{props.playlistName}</p>
            <p className={styles.font_normal}>{props.artist} • Listen Again</p>
          </>
        )}
      </div>
    </div>
  );
}

import styles from "./ArtistProfile.module.css";
import convertNumber from "../Logic/convertNumber.ts";

type Props = {
  isAlbum: boolean;
  imageUrl: string;
  artist: string;
  playlistName?: string;
  subscriberNumber?: number;
  onlyDescription?: true;
};

export default function ArtistProfile(props: Props) {
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
              {convertNumber(props.subscriberNumber || 0)} Subscribers
            </p>
          </>
        )}
        {props.isAlbum && (
          <>
            <p className={styles.font_bold}>{props.playlistName}</p>
            <p className={styles.font_normal}>
              {props.artist} {!props.onlyDescription && " • Listen Again"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

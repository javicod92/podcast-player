import styles from "./ArtistProfile.module.css"
import convertNumber from "../Logic/convertNumber.ts"


type Props = {
  imageUrl: string;
  artist: string;
  subscriberNumber: number;
}

export default function ArtistProfile (props: Props) {
  const subscribeNumberConverted = convertNumber(props.subscriberNumber);

  return (
    <div className={styles.artistProfile_container}>
      <img className={styles.artist_image} src={props.imageUrl} alt="Artist Cover" />
      <div className={styles.description_container}>
        <p className={styles.artist_name}>{props.artist}</p>
        <p className={styles.artist_subscriberNumbers}>{subscribeNumberConverted} Subscribers</p>
      </div>
    </div>
  )
}
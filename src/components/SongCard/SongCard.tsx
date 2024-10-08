import styles from "./SongCard.module.css";
import convertNumber from "../Logic/convertNumber.ts";
import UserReaction from "../UserReaction/UserReaction.tsx";

type Props = {
  id?: number;
  size: "smallest" | "small" | "medium" | "large";
  imageUrl?: string;
  imageAlternative?: string;
  primaryText: string;
  secondaryText?: string;
  views?: number;
  likes?: number;
  audioSrc?: string;
  onSongSelect?: () => void;
  isPlaying?: boolean;
};

const className = {
  smallest: "songCard_container_smallest",
  small: "songCard_container_default",
  medium: "songCard_container_medium",
  large: "songCard_container_large",
};

type ImageContainerProps = {
  imageUrl?: string;
  imageAlternative?: string;
  isPlaying?: boolean;
  size: Props["size"];
};

const ImageContainer = ({
  imageUrl,
  imageAlternative,
  isPlaying,
  size,
}: ImageContainerProps) => (
  <div className={styles.images_container}>
    <img
      src={imageUrl || imageAlternative}
      alt="Álbum del Artista"
      className={
        size !== "smallest" ? styles.artist_image : styles.artist_image_smallest
      }
    />
    {isPlaying && (
      <div className={styles.state_container}>
        <img src="/assets/static/svgs/speaker.svg" alt="Altavoz" />
      </div>
    )}
  </div>
);

type DescriptionProps = {
  primaryText: string;
  secondaryText?: string;
  views?: number;
  likes?: number;
  size: Props["size"];
};

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const Description = ({
  primaryText,
  secondaryText,
  views,
  likes,
  size,
}: DescriptionProps) => (
  <div className={styles.artist_description}>
    <div className={styles.description_text}>
      <p
        className={
          size !== "smallest" ? styles.songTitle : styles.songTitle_smallest
        }
      >
        {truncateText(primaryText, 20)}
      </p>
      <p
        className={
          size !== "smallest"
            ? styles.artistDescription
            : styles.artistDescription_smallest
        }
      >
        {secondaryText ? truncateText(secondaryText, 10) : ""}{" "}
        {size !== "large" && " • Escuchar de Nuevo"}{" "}
        {size === "large" &&
          ` • ${convertNumber(views || 0)} vistas • ${convertNumber(
            likes || 0
          )} me gusta`}
      </p>
    </div>
    {size !== "small" && size !== "smallest" && <UserReaction />}
  </div>
);

export default function SongCard(props: Props) {
  return (
    <div className={styles[className[props.size]]} onClick={props.onSongSelect}>
      <ImageContainer
        imageUrl={props.imageUrl}
        imageAlternative={props.imageAlternative}
        isPlaying={props.isPlaying}
        size={props.size}
      />
      <Description
        primaryText={props.primaryText}
        secondaryText={props.secondaryText}
        views={props.views}
        likes={props.likes}
        size={props.size}
      />
    </div>
  );
}

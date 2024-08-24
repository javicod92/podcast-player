import styles from "./AvatarAddon.module.css";

type Props = {
  size: "avatar" | "small" | "medium" | "default";
  imageUrl: string;
};

export default function AvatarAddon({ size = "default", imageUrl }: Props) {
  
  return (
    <button>
      <img
        className={styles[size]}
        src={imageUrl}
        alt="Foto del Perfil"
      />
    </button>
  );
}

import style from "./AvatarAddon.module.css";

type Props = {
  size: string;
  imageUrl: string;
};

export default function AvatarAddon({ size = "avatar", imageUrl }: Props) {
  const styleTarget =
    size === "avatar"
      ? "avatar"
      : size === "small"
      ? "small"
      : size === "medium"
      ? "medium"
      : "default";

  return (
    <button>
      <img
        className={style[styleTarget]}
        src={imageUrl}
        alt="Foto del Perfil"
      />
    </button>
  );
}

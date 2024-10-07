import styles from "./CategoryTitle.module.css";
import AvatarAddon from "../AvatarAddon/AvatarAddon.tsx";

type Props = {
  primaryText?: string;
  secondaryText: string;
};

export default function CategoryTitle(props: Props) {
  return (
    <div className={styles.CategoryTitle_container}>
      <AvatarAddon
        size="default"
        imageUrl="/assets/static/images/userAvatar/Avatar.png"
      />
      <div className={styles.text_content}>
        {props.primaryText && <p>{props.primaryText}</p>}
        <h2>{props.secondaryText}</h2>
      </div>
    </div>
  );
}

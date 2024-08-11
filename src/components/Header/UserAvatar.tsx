type Props = {
  imageUrl: string;
};

export default function UserAvatar(props: Props) {
  const avatarStyle: React.CSSProperties = {
    height: "48px",
    width: "48px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
  };

  return <img src={props.imageUrl} alt="User Avatar" style={avatarStyle} />;
}

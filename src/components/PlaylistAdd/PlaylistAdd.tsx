import styles from "./PlaylistAdd.module.css";
import UserInput from "../UserInput/UserInput";
import Buttons from "../Buttons/Buttons";
import CloseBtn from "../Buttons/CloseBtn";
import { useState } from "react";
import ArtistProfile from "../ArtistProfile/ArtistProfile";

type Props = {
  setIsPlaylistAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setItems: React.Dispatch<React.SetStateAction<ItemList[]>>;
};

//This types are used to create a correct playlist
type ItemList = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function PlaylistAdd(props: Props) {
  //These constants allow me to create an object that will contain the “playlist” added by the user
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  function handlSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newItem: ItemList = { title, description, imageUrl };
    props.setItems((prevItemList) => [...prevItemList, newItem]);

    //Setting states to default values
    setTitle("");
    setDescription("");
    setImageUrl("");
  }

  function handlClose() {
    props.setIsPlaylistAddOpen(false);
  }

  return (
    <section className={styles.playlistAdd_margin_container}>
      <form className={styles.playlist_inputs_container} onSubmit={handlSubmit}>
        <h2>Creá tu playlist</h2>
        <UserInput
          text="Título"
          placeHolder="Título de la lista"
          inputId="list-title"
          handlChange={setTitle}
          value={title}
        />
        <UserInput
          text="Descripción"
          placeHolder="Descripción de la lista"
          inputId="list-description"
          handlChange={setDescription}
          value={description}
        />
        <UserInput
          text="Imágen (URL)"
          placeHolder="Imágen de la lista"
          inputId="list-image"
          handlChange={setImageUrl}
          value={imageUrl}
        />
        <Buttons
          disabled={!(title && description && imageUrl)}
          type="submit"
          text="Agregar Playlist"
          iconUrl="src/assets/static/svgs/plus.svg"
          isSelected
        />
      </form>
      <div className={styles.playlist_imageAlbum_container}>
        {title && description && imageUrl && (
          <ArtistProfile
            playlistName={title}
            isAlbum={true}
            imageUrl={imageUrl}
            artist={description}
            onlyDescription
          />
        )}
      </div>
      <div className={styles.close_btn}>
        <CloseBtn handlButton={handlClose} />
      </div>
    </section>
  );
}

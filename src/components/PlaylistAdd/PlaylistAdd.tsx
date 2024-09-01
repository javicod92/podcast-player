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
  const [formStates, setFormStates] = useState<ItemList>({
    title: "",
    description: "",
    imageUrl: "",
  });

  function handlSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.setItems((prevItemList) => [...prevItemList, formStates]);

    //Setting states to default values
    setFormStates((prevStates) => ({
      ...prevStates,
      title: "",
      description: "",
      imageUrl: "",
    }));
  }

  function handlClose() {
    props.setIsPlaylistAddOpen(false);
  }

  return (
    <section className={styles.playlistAdd_margin_container}>
      <form className={styles.playlist_inputs_container} onSubmit={handlSubmit}>
        <h2>Creá tu playlist</h2>
        <UserInput
          name="title"
          text="Título"
          placeHolder="Título de la lista"
          inputId="list-title"
          handlChange={setFormStates}
          value={formStates.title}
        />
        <UserInput
          name="description"
          text="Descripción"
          placeHolder="Descripción de la lista"
          inputId="list-description"
          handlChange={setFormStates}
          value={formStates.description}
        />
        <UserInput
          name="imageUrl"
          text="Imágen (URL)"
          placeHolder="Imágen de la lista"
          inputId="list-image"
          handlChange={setFormStates}
          value={formStates.imageUrl}
        />
        <Buttons
          disabled={
            !(formStates.title && formStates.description && formStates.imageUrl)
          }
          type="submit"
          text="Agregar Playlist"
          iconUrl="src/assets/static/svgs/plus.svg"
          isSelected
        />
      </form>
      <div className={styles.playlist_imageAlbum_container}>
        <ArtistProfile
          playlistName={formStates.title}
          isAlbum={true}
          imageUrl={formStates.imageUrl}
          artist={formStates.description}
          onlyDescription
        />
      </div>
      <div className={styles.close_btn}>
        <CloseBtn handlButton={handlClose} />
      </div>
    </section>
  );
}

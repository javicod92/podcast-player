import styles from "./PlaylistAdd.module.css";
import UserInput from "../UserInput/UserInput";
import Buttons from "../Buttons/Buttons";
import SongAlbum from "../SongAlbum/SongAlbum";
import CloseBtn from "../Buttons/CloseBtn";
import { useState } from "react";


export default function PlaylistAdd() {
  
  //This constant contains the state “playlist” which allows me to render them in the list of playlists created by the user 
  const [playList, setPlaylist] = useState<Array<object>>([]);
  
  //These constants allow me to create an object that will contain the “playlist” added by the user
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  function handlSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
          type="submit"
          text="Agregar Playlist"
          iconUrl="src/assets/static/svgs/plus.svg"
          isSelected
        />
      </form>
      <div className={styles.playlist_imageAlbum_container}>
        { title 
          && description 
          && imageUrl 
          && (<SongAlbum
          isAlbum={true}
          imageSource={imageUrl}
          artist={description}
          playlistName={title}
        />) }
      </div>
      <div className={styles.close_btn}>
        <CloseBtn />
      </div>
    </section>
  );
}

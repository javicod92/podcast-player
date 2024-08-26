import styles from "./PlaylistAdd.module.css";
import UserInput from "../UserInput/UserInput";
import Buttons from "../Buttons/Buttons";
import SongAlbum from "../SongAlbum/SongAlbum";

export default function PlaylistAdd() {
  return (
    <section className={styles.playlistAdd_margin_container}>
      <form className={styles.playlist_inputs_container}>
        <h2>Creá tu playlist</h2>
        <UserInput
          text="Título"
          placeHolder="Título de la lista"
          inputId="list-title"
        />
        <UserInput
          text="Descripción"
          placeHolder="Descripción de la lista"
          inputId="list-description"
        />
        <UserInput
          text="Imágen (URL)"
          placeHolder="Imágen de la lista"
          inputId="list-image"
        />
        <Buttons
          type="submit"
          text="Agregar Playlist"
          iconUrl="src/assets/static/svgs/plus.svg"
          isSelected
        />
      </form>
      <div className={styles.playlist_imageAlbum_container}>
        <SongAlbum
          isAlbum={true}
          imageSource={"src/assets/static/images/albumsImage/Boris1.jpg"}
          artist={"Boris"}
          playlistName="Probando"
        />
      </div>
    </section>
  );
}

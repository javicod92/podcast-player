import styles from "./Home.module.css";
import FiltersChip from "../FiltersChip/FiltersChip";
import {
  FilterList,
  similarTo,
  recomendedAlbums,
} from "../Logic/DataBaseSimulation";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import ArrowLeft from "../ArrowContent/ArrowLeft";
import ArrowRight from "../ArrowContent/ArrowRight";
import SongAlbum from "../SongAlbum/SongAlbum";
import ArtistProfile from "../ArtistProfile/ArtistProfile";
import Buttons from "../Buttons/Buttons";
import SongCard from "../SongCard/SongCard";
import useFetchData from "../../customHooks/useFetchData";
import { audioTypes } from "../Logic/audioTypes";

const API_URL = "https://api.audioboom.com/audio_clips";

type Props = {
  currentSongId: number | undefined;
  isPlaying: boolean;
  onSongSelect: (song: audioTypes) => void;
};

export default function PrincipalContent(props: Props) {
  const { data, isLoading, error } = useFetchData(API_URL, 1);
  const {
    data: data2,
    isLoading: isLoading2,
    error: error2,
  } = useFetchData(API_URL, 2);

  if (isLoading || isLoading2) {
    return (
      <h1 style={{ display: "grid", placeContent: "center", width: "100%" }}>
        La página se está cargando...
      </h1>
    );
  }

  if (error || error2) {
    alert("Hubo un error y la página no se cargó");
    return (
      <h1 style={{ display: "grid", placeContent: "center", width: "100%" }}>
        Hubo un error y la página no se cargó
      </h1>
    );
  }

  return (
    <div className={styles.page_container}>
      <div className={styles.page_border_top_bottom}>
        <div className={styles.page_border_left}>
          <div className={styles.page_main}>
            <section id="filterChip" className={styles.filter}>
              {FilterList.map((element) => {
                return (
                  <FiltersChip
                    text={element.value}
                    key={element.key}
                    isSelected={element.isSelected}
                  />
                );
              })}
            </section>
            <section id="listenAgain" className={styles.listenAgain_content}>
              <div className={styles.listenAgain_content_header}>
                <CategoryTitle
                  primaryText="Sufyan Ali"
                  secondaryText="Listen Again"
                />
                <div className={styles.header_content_arrows}>
                  <ArrowLeft isSelected={false} />
                  <ArrowRight isSelected />
                </div>
              </div>
              <div className={styles.listenAgain_content_albums}>
                {data
                  .map((element) => {
                    return (
                      <SongAlbum
                        key={element.id}
                        id={element.id}
                        isAlbum={false}
                        imageSource={element.channel.urls.logo_image.original}
                        imageAlternative={
                          element.user.urls.profile_image.original
                        }
                        primaryText={element.title}
                        secondaryText={element.description}
                        audioSrc={element.urls.high_mp3}
                        onSongSelect={() => props.onSongSelect(element)}
                        isPlaying={
                          props.currentSongId === element.id && props.isPlaying
                        }
                      />
                    );
                  })
                  .slice(0, 10)}
              </div>
            </section>
            <section id="similarTo" className={styles.similarTo_container}>
              <div className={styles.similarTo_content_header}>
                <CategoryTitle
                  primaryText="Similar To"
                  secondaryText="Boris Brejcha"
                />
                <div className={styles.header_content_arrows}>
                  <ArrowLeft isSelected={false} />
                  <ArrowRight isSelected />
                </div>
              </div>
              <div className={styles.artistContainer}>
                {similarTo.map((element) => {
                  return (
                    <ArtistProfile
                      key={element.key}
                      isAlbum={element.isAlbum}
                      imageUrl={element.imageUrl}
                      artist={element.artist}
                      subscriberNumber={element.subscriberNumber}
                    />
                  );
                })}
              </div>
            </section>
            <section id="quickPicks" className={styles.quickPicks_container}>
              <div className={styles.quickPicks_content_header}>
                <CategoryTitle
                  primaryText="Start Radio From Songs"
                  secondaryText="Quick Picks"
                />
                <div
                  className={`${styles.header_content_arrows} ${styles.header_quickPicks}`}
                >
                  <Buttons
                    type="button"
                    text="Play All"
                    iconUrl="src/assets/static/svgs/icon.svg"
                  />
                  <ArrowLeft isSelected={false} />
                  <ArrowRight isSelected />
                </div>
              </div>
              <div className={styles.quickPicks_songCards}>
                {data2.map((element) => {
                  return (
                    <SongCard
                      key={element.id}
                      id={element.id}
                      size="small"
                      imageUrl={element.channel.urls.logo_image.original}
                      imageAlternative={
                        element.user.urls.profile_image.original
                      }
                      primaryText={element.title}
                      secondaryText={element.description}
                      audioSrc={element.urls.high_mp3}
                      onSongSelect={() => props.onSongSelect(element)}
                    />
                  );
                })}
              </div>
            </section>
            <section
              id="recommendedAlbums"
              className={styles.recommendedAlbums_container}
            >
              <div className={styles.quickPicks_content_header}>
                <CategoryTitle
                  primaryText=""
                  secondaryText="Recomended Albums"
                />
                <div className={styles.header_content_arrows}>
                  <ArrowLeft isSelected={false} />
                  <ArrowRight isSelected />
                </div>
              </div>
              <div className={styles.recommendedAlbums}>
                {recomendedAlbums.map((element) => {
                  return (
                    <ArtistProfile
                      key={element.key}
                      isAlbum={element.isAlbum}
                      imageUrl={element.imageUrl}
                      artist={element.artist}
                      playlistName={element.playlistName}
                      subscriberNumber={element.subscriberNumber}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

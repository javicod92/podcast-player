import styles from "./PrincipalContent.module.css";
import FiltersChip from "../FiltersChip/FiltersChip";
import { FilterList, ListenAgain } from "../Logic/DataBaseSimulation";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import ArrowLeft from "../ArrowContent/ArrowLeft";
import ArrowRight from "../ArrowContent/ArrowRight";
import SongAlbum from "../SongAlbum/SongAlbum";

export default function PrincipalContent() {
  return (
    <div className={styles.page_container}>
      <div className={styles.page_border_top_bottom}>
        <div className={styles.page_border_left}>
          <div className={styles.page_main}>
            <div className={styles.filter}>
              {FilterList.map((element) => {
                return (
                  <FiltersChip
                    text={element.value}
                    key={element.key}
                    isSelected={element.isSelected}
                  />
                );
              })}
            </div>
            <div className={styles.listenAgain_content}>
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
                {
                  ListenAgain.map(element => {
                    return (
                      <SongAlbum
                      isAlbum={element.isAlbum}
                      imageSource={element.imageSource}
                      artist={element.artist}
                      playlistName={element.playlistName}
                      songName={element.songName}
                      songs={element.songs}
                      views={element.views}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

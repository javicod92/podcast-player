import styles from "./PrincipalContent.module.css";
import FiltersChip from "../FiltersChip/FiltersChip";
import { FilterList } from "../Logic/DataBaseSimulation";

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
          </div>
        </div>
      </div>
    </div>
  );
}

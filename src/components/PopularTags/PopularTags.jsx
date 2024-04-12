import React from "react";
import styles from "./PopularTags.module.css";
import chevronRight from "../../assets/chevron-right.svg";

const Tags = ({ name }) => {
  return <div className={styles.tags}>{name}</div>;
};

const PopularTags = () => {
  return (
    <div className={styles.popularTags}>
      <div className={styles.tagsTitle}>Popular tags for handbag</div>
      <div className={styles.tagsCollection}>
        <Tags name="Clutch" />
        <Tags name="Fabric lining" />
        <Tags name="Baggit" />
        <Tags name="Multi " />
        <img
          className={styles.chevronRight}
          src={chevronRight}
          alt="chevron-right"
        />
      </div>
    </div>
  );
};

export default PopularTags;

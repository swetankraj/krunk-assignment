import React from "react";
import styles from "./Filters.module.css";
import slidersHorizontal from "../../assets/sliders-horizontal.svg";
import primaryCross from "../../assets/check-square-1.svg";
import secondaryCross from "../../assets/check-square-2.svg";

const Tags = ({ name, type }) => {
  return (
    <div
      className={[
        styles.tags,
        type === "primary" ? styles.primary : styles.secondary,
      ].join(" ")}
    >
      {name}{" "}
      <img
        src={type === "primary" ? primaryCross : secondaryCross}
        alt="remove"
      />
    </div>
  );
};

const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.selectFilters}>
        <p>Select filters</p>
        <div className={styles.slider}>
          <img src={slidersHorizontal} alt="slider"></img>
          <p>Filter</p>
        </div>
      </div>
      <div className={styles.flex}>
        <Tags name="Strap - Long" type="primary" />
        <Tags name="Colour" />
        <Tags name="Size" />
        <Tags name="Brand" />
        <Tags name="Material" />
      </div>
    </div>
  );
};

export default Filters;

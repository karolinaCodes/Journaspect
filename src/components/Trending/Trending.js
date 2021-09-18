import MediaCard from "./Card";
import styles from "./Trending.module.css";
import { Fragment } from "react";

function Trending() {
  return (
    <Fragment>
      <h1 className={styles.trendingHeading}>Trending</h1>
      <div className={styles.trendingImgsDiv}>
        <MediaCard className={styles.mediaCard} />
        <MediaCard className={styles.mediaCard} />
        <MediaCard className={styles.mediaCard} />
        <MediaCard className={styles.mediaCard} />
        <MediaCard className={styles.mediaCard} />
        <MediaCard className={styles.mediaCard} />
        <MediaCard className={styles.mediaCard} />
        <MediaCard className={styles.mediaCard} />
      </div>
    </Fragment>
  );
}

export default Trending;

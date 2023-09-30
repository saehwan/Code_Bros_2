import React, { Fragment } from "react";
import styles from "./feedbox.module.scss";

const FeedBox = (): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.Feed}>This is the Feed Box</div>
    </Fragment>
  );
};
export default FeedBox;

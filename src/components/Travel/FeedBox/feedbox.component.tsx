import React, { Fragment } from "react";
import styles from "./feedbox.module.scss";
import Card from "../../Card/card.component";
const FeedBox = (): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.Feed}>
        <Card />
      </div>
    </Fragment>
  );
};
export default FeedBox;

import React, { Fragment } from "react";
import styles from "./home.module.scss";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.Home}>This is the Home Component</div>
    </Fragment>
  );
};
export default Home;

import React, { Fragment } from "react";
import styles from "./topbar.module.scss";
import SimpleLogo from "../../assets/Logo_Simple.png";

const TopBar = (): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.TopBar}>
        <img className={styles.simpleLogoImage} src={SimpleLogo} />
      </div>
    </Fragment>
  );
};
export default TopBar;

import React, { Fragment } from "react";
import styles from "./focus.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import Home from "./Home/home.component";

const Focus = (): JSX.Element => {
  const $started = useSelector((state: AppState) => state.edit.started);
  return (
    <Fragment>
      <div className={styles.Focus}>{$started ? <></> : <Home />}</div>
    </Fragment>
  );
};
export default Focus;

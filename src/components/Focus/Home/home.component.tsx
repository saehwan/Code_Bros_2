import React, { Fragment } from "react";
import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className={styles.Home}>This is the home</div>
      <button onClick={(): void => navigate("/travel")}>Travel</button>
    </Fragment>
  );
};
export default Home;

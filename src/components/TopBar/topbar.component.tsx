import React, { Fragment } from "react";
import styles from "./topbar.module.scss";
import SimpleLogo from "../../assets/Logo_Simple.png";
import { useDispatch } from "react-redux";
import { setStarted } from "../../store/Edit/slice";
import { useNavigate } from "react-router-dom";

const TopBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHomeButton = (): void => {
    dispatch(setStarted(false));
    navigate("/");
  };

  return (
    <Fragment>
      <div className={styles.TopBar}>
        <img
          className={styles.simpleLogoImage}
          src={SimpleLogo}
          onClick={onHomeButton}
        />
      </div>
    </Fragment>
  );
};
export default TopBar;

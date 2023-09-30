import React, { Fragment, useState } from "react";
import styles from "./topbar.module.scss";
import SimpleLogo from "../../assets/Logo_Simple.png";
import ScheduleLogo from "../../assets/TopBar/Schedule.svg";
import ScheduleDarkLogo from "../../assets/TopBar/ScheduleDark.svg";
import { useDispatch, useSelector } from "react-redux";
import { setStarted } from "../../store/Edit/slice";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../store/store";

const TopBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const $started = useSelector((state: AppState) => state.edit.started);
  const [isHovered, setIsHovered] = useState(false);

  const onHomeButton = (): void => {
    dispatch(setStarted(false));
    navigate("/");
  };
  const onScheduleButton = (): void => {
    navigate("/schedule");
  };

  return (
    <Fragment>
      <div className={styles.TopBar}>
        <img
          className={styles.simpleLogoImage}
          src={SimpleLogo}
          onClick={onHomeButton}
        />
        {$started && (
          <img
            src={isHovered ? ScheduleDarkLogo : ScheduleLogo}
            className={styles.simpleScheduleLogo}
            onMouseEnter={(): void => setIsHovered(true)}
            onMouseLeave={(): void => setIsHovered(false)}
            onClick={(e): void => {
              e.persist();
              onScheduleButton();
            }}
          />
        )}
      </div>
    </Fragment>
  );
};

export default TopBar;

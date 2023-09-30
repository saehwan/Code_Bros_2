import React, { Fragment, useState } from "react";
import styles from "./schedule.module.scss";
import BackIcon from "../../assets/Back.svg";
import BackIconDark from "../../assets/BackDark.svg";
import { useNavigate } from "react-router-dom";

const SchedulePage = (): JSX.Element => {
  const navigate = useNavigate();

  const [isBackHovered, setIsBackHovered] = useState(false);

  const onBack = (): void => {
    navigate("/travel");
  };

  return (
    <Fragment>
      <div className={styles.Schedule}>
        <div className={styles.scheduleTopBar}>
          <img
            className={styles.backIcon}
            src={isBackHovered ? BackIconDark : BackIcon}
            onClick={onBack}
            onMouseEnter={(): void => setIsBackHovered(true)}
            onMouseLeave={(): void => setIsBackHovered(false)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SchedulePage;

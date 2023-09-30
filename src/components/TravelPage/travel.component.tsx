import React, { Fragment } from "react";
import styles from "./travel.module.scss";
import FeedBox from "../FeedBox/feedbox.component";
import PlannerBox from "../PlannerBox/plannerbox.component";

const TravelPage = (): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.Travel}>
        <FeedBox />
        <PlannerBox />
      </div>
    </Fragment>
  );
};
export default TravelPage;

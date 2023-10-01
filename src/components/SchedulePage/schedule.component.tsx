import React, { Fragment, useMemo, useRef, useState } from "react";
import styles from "./schedule.module.scss";
import BackIcon from "../../assets/Back.svg";
import BackIconDark from "../../assets/BackDark.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { itinerary, months } from "../../models/itinerary";
import ItineraryCard from "./ItineraryCard/itinerarycard.component";

const SchedulePage = (): JSX.Element => {
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState<itinerary | null>(null);

  const $itineraries = useSelector((state: AppState) => state.data.itineraries);

  const visibility = useRef<string>("fadeIn");
  const [isBackHovered, setIsBackHovered] = useState(false);

  const onBack = (): void => {
    navigate("/travel");
  };

  const groupedItineraries: itinerary[][] = useMemo(() => {
    const groups: { [key: string]: itinerary[] } = {};

    const sortedItineraries = [...$itineraries].sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      return a.month - b.month;
    });

    sortedItineraries.forEach((itineraryItem) => {
      const key = `${itineraryItem.month}-${itineraryItem.year}`;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(itineraryItem);
    });

    return Object.values(groups);
  }, [$itineraries]);

  return (
    <Fragment>
      <div
        className={`${styles.Schedule} ${styles[visibility.current]} ${
          selectedCard && styles.dim
        }`}
        onClick={(): void => {
          selectedCard && setSelectedCard(null);
        }}
      >
        <div className={styles.scheduleTopBar}>
          <img
            className={styles.backIcon}
            src={isBackHovered ? BackIconDark : BackIcon}
            onClick={onBack}
            onMouseEnter={(): void => setIsBackHovered(true)}
            onMouseLeave={(): void => setIsBackHovered(false)}
          />
          <h1 className={styles.title}>Itineraries</h1>
        </div>
        <div className={styles.ItenerariesView}>
          {groupedItineraries.map((iteneraryGroup) => {
            return (
              <div
                className={styles.iteneraryMonthGroup}
                key={iteneraryGroup[0].id}
              >
                <div className={styles.iteneraryMonthGroupTitle}>
                  {months[iteneraryGroup[0].month - 1] +
                    " " +
                    iteneraryGroup[0].year.toString()}
                </div>

                <div className={styles.cardGrid}>
                  {iteneraryGroup
                    .sort((a, b) => a.day - b.day)
                    .map((iteneraryDay) => (
                      <ItineraryCard
                        key={iteneraryDay.id}
                        onClick={(): void => {
                          setSelectedCard(iteneraryDay);
                        }}
                        itinerary={iteneraryDay}
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
        {selectedCard && <div className={styles.selectedCard}>Hello</div>}
      </div>
    </Fragment>
  );
};

export default SchedulePage;

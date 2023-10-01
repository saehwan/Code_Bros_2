import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import styles from "./schedule.module.scss";
import BackIcon from "../../assets/Back.svg";
import BackIconDark from "../../assets/BackDark.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { itinerary, months } from "../../models/itinerary";
import ItineraryCard from "./ItineraryCard/itinerarycard.component";
import DropdownSelector from "./DropDownFilter/dropdownfilter.component";
import ItineraryPopover from "./ItineraryPopOver/itinerarypopover.component";

const SchedulePage = (): JSX.Element => {
  const navigate = useNavigate();

  const [selectedItinerary, setSelectedItinerary] = useState<itinerary | null>(
    null,
  );
  const [monthFilter, setMonthFilter] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<string>("");

  useEffect(() => {}, []);

  const $itineraries = useSelector((state: AppState) => state.data.itineraries);

  const visibility = useRef<string>("fadeIn");
  const [isBackHovered, setIsBackHovered] = useState(false);

  const onBack = (): void => {
    navigate("/travel");
  };

  const groupedItineraries: itinerary[][] = useMemo(() => {
    const groups: { [key: string]: itinerary[] } = {};

    const sortedItineraries = [...$itineraries]
      .filter((itinerary) => {
        if (yearFilter && Number(yearFilter) !== itinerary.year) {
          return false;
        }

        if (monthFilter && months[itinerary.month - 1] !== monthFilter) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
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
  }, [$itineraries, yearFilter, monthFilter]);

  return (
    <Fragment>
      <div
        className={`${styles.Schedule} ${styles[visibility.current]} ${
          selectedItinerary && styles.dim
        }`}
        onClick={(): void => {
          selectedItinerary && setSelectedItinerary(null);
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
          <div className={styles.filtersContainer}>
            <div style={{ margin: "7px" }}>Filters: </div>
            <DropdownSelector
              title={"Year"}
              handleStateChange={setYearFilter}
              options={Array.from(
                new Set(
                  $itineraries.map((itinerary) => {
                    return itinerary.year.toString();
                  }),
                ),
              )}
            />
            <DropdownSelector
              title={"Month"}
              handleStateChange={setMonthFilter}
              options={Array.from(
                new Set(
                  $itineraries.map((itinerary) => {
                    return months[itinerary.month - 1];
                  }),
                ),
              )}
            />
          </div>
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
                          setSelectedItinerary(iteneraryDay);
                        }}
                        itinerary={iteneraryDay}
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
        {selectedItinerary && (
          <ItineraryPopover
            itinerary={selectedItinerary}
            localStateChanger={setSelectedItinerary}
          />
        )}
      </div>
    </Fragment>
  );
};

export default SchedulePage;

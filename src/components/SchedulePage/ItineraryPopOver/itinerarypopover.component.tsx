import React, { useState } from "react";
import styles from "./itinerarypopover.module.scss";
import { itinerary, months } from "../../../models/itinerary";
import { convertTimeToModern } from "../../Travel/PlannerBox/plannerbox.component";
import { Icon } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteItinerary } from "../../../store/Data/slice";

interface PopoverProps {
  itinerary: itinerary;
  localStateChanger: React.Dispatch<React.SetStateAction<itinerary | null>>;
}

const ItineraryPopover: React.FC<PopoverProps> = ({
  itinerary,
  localStateChanger,
}) => {
  const dispatch = useDispatch();

  const [confirmingDelete, setConfirmingDelete] = useState<boolean>(false);

  const buildItineraryDate = (): string => {
    let date: string = "";
    date += months[itinerary.month - 1] + " ";
    date += itinerary.day.toString() + ", ";
    date += itinerary.year.toString();

    return date;
  };

  return (
    <div
      className={styles.popoverContainer}
      onClick={(e): void => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className={styles.controlsContainer}>
        {confirmingDelete && (
          <span className={styles.confirm}>Confirm Delete:</span>
        )}
        <div
          className={styles.iconContainer}
          onClick={(): void => {
            if (confirmingDelete) {
              dispatch(deleteItinerary(itinerary.id));
              localStateChanger(null);
            } else setConfirmingDelete(true);
          }}
        >
          <Icon>
            {" "}
            <Delete className={styles.trash} />
          </Icon>
        </div>
      </div>
      <div
        className={styles.popover}
        onClick={(): void => setConfirmingDelete(false)}
      >
        <div className={styles.dateAndTitleContainer}>
          <h1>{itinerary.title ? itinerary.title : buildItineraryDate()}</h1>
          {itinerary.title && (
            <span className={styles.subtitle}>{buildItineraryDate()}</span>
          )}
        </div>
        <div className={styles.mealsContainer}>
          {[...itinerary.meals]
            .sort((a, b) => {
              const dateA = new Date(`1970-01-01 ${a.time}`);
              const dateB = new Date(`1970-01-01 ${b.time}`);
              return dateA.getTime() - dateB.getTime();
            })

            .map((entry, index) => (
              <div key={index} className={styles.mealEntry}>
                {
                  <span style={{ fontWeight: "bold" }}>
                    {convertTimeToModern(entry.time)} |
                  </span>
                }{" "}
                {entry.type} at{" "}
                <span style={{ fontStyle: "italic" }}>{entry.location}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryPopover;

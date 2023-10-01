import React, { Fragment, useEffect, useState } from "react";
import styles from "./plannerbox.module.scss";
import ThemeButton from "../../GlobalComponents/ThemeButton/themebutton.component";
import { Calendar } from "react-calendar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";
import { useDispatch } from "react-redux";
import { addItinerary } from "../../../store/Data/slice";
import { v4 as uuidv4 } from "uuid";
import { itinerary } from "../../../models/itinerary";

const PlannerBox = (): JSX.Element => {
  const $itineraries = useSelector((state: AppState) => state.data.itineraries);

  const dispatch = useDispatch();

  const [entries, setEntries] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState("");
  const [currentMeal, setCurrentMeal] = useState("breakfast");
  const [addingTime, setAddingTime] = useState(false);
  const [editingDate, setEditingDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dateToday, setDateToday] = useState(
    selectedDate.getMonth() +
      "/" +
      selectedDate.getDate() +
      "/" +
      selectedDate.getFullYear(),
  );

  const [newItinerary, setNewItinerary] = useState<itinerary>({
    id: uuidv4(),
    month: selectedDate.getMonth(),
    day: selectedDate.getDay(),
    year: selectedDate.getFullYear(),
  });

  const handleAddItinerary = (newItinerary: itinerary): void => {
    dispatch(addItinerary(newItinerary)); // Dispatch the action with the new itinerary data
  };

  const timeString = `${currentTime} ${currentMeal} at Finbomb`;

  useEffect(() => {
    setDateToday(
      selectedDate?.getMonth() +
        "/" +
        selectedDate?.getDate() +
        "/" +
        selectedDate?.getFullYear(),
    );
  }, [selectedDate]);

  const handleTimeEnter = (): void => {
    setEntries([...entries, timeString]);
    handleAddItinerary(newItinerary);
    setCurrentTime("");
    setAddingTime(false);
  };

  const convertTimeToModern = (time: string): string => {
    const parts = time.split(":");

    let hours = parseInt(parts[0], 10);
    const minutes: string = parts[1];

    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    } else if (hours === 0) {
      hours = 12;
    }

    const convertedTimeString = `${hours}:${minutes} ${ampm}`;

    return convertedTimeString;
  };

  const handleDateChange = (date: Date): void => {
    const seenDates = new Set(); // A Set to store unique date combinations
    $itineraries.forEach((itinerary) => {
      const { month, day, year } = itinerary;
      const dateKey = `${month}-${day}-${year}`;

      if (seenDates.has(dateKey)) {
        alert("Bad");
      } else {
        seenDates.add(dateKey);
      }
    });

    setSelectedDate(date);
    setEditingDate(false);
  };

  return (
    <Fragment>
      <div className={styles.Planner}>
        <div style={{ width: "50%" }}>
          {editingDate && (
            <Calendar
              value={selectedDate}
              onChange={(e): void => handleDateChange(e as Date)}
            />
          )}
        </div>
        <div
          style={{
            marginBottom: "1%",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Choose your itinerary date!" placement="left">
            <AccessTimeIcon
              className={styles.clockIcon}
              style={{ marginRight: "1%" }}
              onClick={(): void => setEditingDate(!editingDate)}
            />
          </Tooltip>
          <span>Itinerary for {dateToday}</span>
        </div>
        <div>
          <ThemeButton
            text={addingTime ? "Cancel Add" : "+ Add New Event"}
            onClick={(): void => setAddingTime(!addingTime)}
          />
        </div>
        {addingTime && (
          <form
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "1%",
              height: 50,
            }}
            onSubmit={handleTimeEnter}
          >
            <input
              className={styles.PlannerInput}
              type="time"
              placeholder="Enter a time"
              onChange={(e): void => {
                setCurrentTime(convertTimeToModern(e.target.value));
                setNewItinerary({
                  ...newItinerary,
                  id: uuidv4(),
                  month: selectedDate?.getMonth(),
                  year: selectedDate?.getFullYear(),
                  day: selectedDate?.getDay(),
                });
              }}
            />
            <select
              className={styles.PlannerInput}
              placeholder="Choose a meal"
              onChange={(e): void => setCurrentMeal(e.target.value)}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Brunch">Brunch</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
            <button type="submit">+</button>
          </form>
        )}
        <div>
          {entries.map((entry, index) => (
            <div style={{ marginTop: "10%" }} key={index}>
              {entry}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default PlannerBox;

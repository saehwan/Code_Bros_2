export interface itinerary {
  title?: string;
  id: string;

  month: number;
  day: number;
  year: number;

  meals: meal[];
}

export interface meal {
  time: string;
  type: string;
  location: string;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

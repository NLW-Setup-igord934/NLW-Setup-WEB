import dayjs from "dayjs";

export function generateDatesFromYearsBeginning() {
  const fisDayOdTheYear = dayjs().startOf("year");
  const today = new Date();

  const dates = [];

  let compareDate = fisDayOdTheYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }
  return dates;
}

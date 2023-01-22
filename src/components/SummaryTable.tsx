import { generateDatesFromYearsBeginning } from "../utils/generate-dates-from-years-beginning";
import { HabitDay } from "./HabitDay";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import dayjs from "dayjs";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearsBeginning();
const minimunSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimunSummaryDatesSize - summaryDates.length;

type tSummary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

export function SummaryTable() {
  const [summary, setSummary] = useState<tSummary>([]);

  useEffect(() => {
    api.get("/summary").then((res) => setSummary(res.data));
  }, []);
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, i) => {
          return (
            <div
              key={`${day}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex item-center justify-center"
            >
              {day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summary.length > 0 &&
          summaryDates.map((summaryDay) => {
            const dayInSumary = summary.find((day) =>
              dayjs(summaryDay).isSame(day.date, "day")
            );

            return (
              <HabitDay
                key={summaryDay.toString()}
                date={summaryDay}
                amount={dayInSumary?.amount}
                defautCompleted={dayInSumary?.completed}
              />
            );
          })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((v, i) => {
            return (
              <div
                key={`notDay-${i}`}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              ></div>
            );
          })}
      </div>
    </div>
  );
}

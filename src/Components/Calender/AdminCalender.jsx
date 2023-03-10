import React, { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isPast,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import axios from "../../axios";
import { toast } from "react-hot-toast";
let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

const meetings = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AdminCalender(props) {
  let today = startOfToday();
  let productId = props.productId;
  let [selectedDay, setSelectedDay] = useState(today);
  const [bookedDates, setBookedDate] = useState([]);
  const [blockDates, setBlockDates] = useState([]);

  console.log(blockDates);

  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  function isHighlighted(date) {
    return bookedDates.some((data) => data.getTime() === date.getTime());
  }

  function isBlocked(date) {
    if (blockDates != null) {
      return blockDates.some(
        (data) =>
          //  console.log(date)
          new Date(data).getTime() === date.getTime()
        //  data.getTime()=== date.getTime()
      );
    }
  }

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const getDates = async () => {
    await axios
      .get(`/getDates/${productId}`)
      .then((response) => {
        setBlockDates(response.data.orderedDates);
      })
      .catch((error) => {
        if (error.message) {
          toast.error(error.response);
        } else {
          toast.error(error.message);
        }
      });
  };
  useEffect(() => {
    getDates();
  }, [selectedDay]);

  return (
    <div className="pb-2">
      <div className="pt-10 ">
        <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
          <div className="md:grid md:grid-cols-4 md:divide-x md:divide-gray-200">
            <div className="w-80">
              <div className="flex items-center">
                <h2 className="flex-auto font-semibold text-gray-900">
                  {format(firstDayCurrentMonth, "MMMM yyyy")}
                </h2>
                <button
                  type="button"
                  onClick={previousMonth}
                  className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={nextMonth}
                  type="button"
                  className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                <div className="text-red-600">S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>
              <div className="grid grid-cols-7 mt-2 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      "py-1.5"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => saveDate(day)}
                      className={classNames(
                        isHighlighted(day) &&
                          !isToday(day) &&
                          "bg-gray-500 text-white",

                        isBlocked(day) &&
                          !isToday(day) &&
                          !isPast(day) &&
                          "bg-green-600 text-white",
                        isBlocked(day) &&
                          !isToday(day) &&
                          isPast(day) &&
                          "bg-green-200 text-white",
                        //   isEqual(day, selectedDay ) && 'text-white',
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "text-white bg-red-500",
                        isPast(day) &&
                          !isBlocked(day) &&
                          !isToday(day) &&
                          " text-gray-400",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          "text-gray-900",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          "text-gray-400",
                        isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "bg-red-500",
                        //   isEqual(day, selectedDay) &&
                        //     !isToday(day) &&
                        //     'bg-gray-900',
                        !isEqual(day, selectedDay) && "hover:bg-gray-200",
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-semibold",
                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                      )}
                    >
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-center text-lg font-medium text-teal-600 ">
          {" "}
          Bookings
        </h1>
      </div>
    </div>
  );
}

export default AdminCalender;

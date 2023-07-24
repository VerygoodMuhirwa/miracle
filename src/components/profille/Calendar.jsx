import React, { useState } from "react";

const hoursRanges = ["0-4", "4-8", "8-12", "12-16", "16-20", "20-24"];
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = () => {
  const [selectedTimes, setSelectedTimes] = useState([]);
  console.log(selectedTimes);

  const handleTimeClick = (day, range) => {
    const newTime = { day, range };
    setSelectedTimes((prevTimes) => [...prevTimes, newTime]);
  };

  const isTimeSelected = (day, range) => {
    return selectedTimes.some(
      (time) => time.day === day && time.range === range
    );
  };

  return (
    <div  className="flex flex-row gap-5 justify-between">
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-8 gap-0  ">
        {/* Empty cell for the top-left corner */}
        <div className="border"></div>

        {/* Render days of the week */}
        {daysOfWeek.map((day) => (
          <div key={day} className="border text-center p-2">
            {day}
          </div>
        ))}
      </div>

      {/* Render hours ranges */}
      {hoursRanges.map((range, index) => (
        <>
          <div key={range} className="grid grid-cols-8 gap-0">
            <div className="text-center p-2 border">{range}</div>

            {/* Render time slots for each day */}
            {daysOfWeek.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`p-2 cursor-pointer ${
                  isTimeSelected(dayIndex, range) ? "bg-[#9E6F27]" : ""
                } border-b-2 border-r-2`}
                onClick={() => handleTimeClick(dayIndex, range)}
              >
                {/* Empty square */}
              </div>
            ))}
          </div>
        </>
      ))}
      <div className="flex justify-center items-center mt-5">
        <p>In your timezone (UTC -04:00)</p>
      </div>
    </div>
   <div className="flex flex-row justify-center ">
    <p>Next Available Time :  12:00</p>
   </div>
    </div>

  );
};

export default Calendar;

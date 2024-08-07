import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalenderWrapper() {
  const [dates, setDates] = useState([new Date(), new Date()]);

  const onChange = (dates) => {
    if (Array.isArray(dates)) {
      setDates(dates);
    } else {
      setDates([dates]);
    }
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={dates}
        selectRange={true}
        className="calendar"
      />
      <p>Selected Dates: {dates.map((date) => date.toISOString()).join(', ')}</p>
    </div>
  );
}

export default CalenderWrapper;
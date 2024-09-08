import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderWrapper.css'

function CalenderWrapper({ onDateChange ,date }) {
  const today = new Date();

  const onChange = (date) => {
    if (date >= today) {
      const formattedDate = date.toLocaleDateString('en-CA');
      onDateChange(formattedDate);
    }
  };

  return (
    <div className='w-100  calender-wrapper mb-5'>
      <p className='mt-3'>إختر التاريخ</p>
      <Calendar
        onChange={onChange}
        value={date ? new Date(date) : null}
        minDate={today}
        tileClassName={({ date, view }) => 
          date.toLocaleDateString() === today.toLocaleDateString() ? 'today' : ''
        }
        className="calendar mb-3"
      />
    </div>
  );
}

export default CalenderWrapper;
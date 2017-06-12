import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

const Calendar = (props) => {

    BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

    return (
        <div>
            <h1>HI</h1>
            <BigCalendar 
                events={[]}
                startAccessor='startDate'
                endAccessor='endDate'
            />
        </div>
    )
}

export default Calendar;
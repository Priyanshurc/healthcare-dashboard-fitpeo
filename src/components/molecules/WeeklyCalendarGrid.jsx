import React from 'react';
import AppointmentTimeSlot from './AppointmentTimeSlot';
import '../../styles/WeeklyCalendarGrid.css';

const calendarData = [
  { day: 'Mon', date: 25, slots: ['10:00', '11:00', '12:00'] },
  { day: 'Tues', date: 26, slots: ['08:00', '09:00', '10:00'], selectedIndex: 1, isToday: true },
  { day: 'Wed', date: 27, slots: ['12:00', '', '13:00'] },
  { day: 'Thurs', date: 28, slots: ['10:00', '11:00', ''], selectedIndex: 1 },
  { day: 'Fri', date: 29, slots: ['14:00', '', '16:00'] },
  { day: 'Sat', date: 30, slots: [{ time: '12:00', mergeToNext: true }, '14:00', '15:00'], selectedIndex: 0 },
  { day: 'Sun', date: 31, slots: [{ time: '09:00', mergedFromPrev: true }, '09:00', '11:00'], isDisabled: true },
];

export default function WeeklyCalendarGrid() {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <span>October 2021</span>
        <div className="nav-buttons">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map(({ day, date, slots, selectedIndex, isToday, isDisabled }, idx) => (
          <div key={idx} className={`calendar-day ${isToday ? 'today' : ''} ${isDisabled ? 'disabled' : ''}`}>
            <div className="day-header">
              <div className="day-name">{day}</div>
              <div className="day-date">{date}</div>
            </div>
            <div className="time-slots">
              {slots.map((slot, i) => {
                if (typeof slot === 'string') {
                  return slot ? (
                    <AppointmentTimeSlot
                      key={i}
                      time={slot}
                      selected={i === selectedIndex}
                      disabled={isDisabled}
                    />
                  ) : (
                    <div key={i} className="empty-slot">—</div>
                  );
                } else if (slot.mergedFromPrev) {
                  return null; // skip rendering, it’s already merged
                } else {
                  return (
                    <div
                      key={i}
                      className={`merged-slot ${slot.mergeToNext ? 'merge' : ''}`}
                      style={{
                        flexBasis: slot.mergeToNext ? '200%' : undefined // Adjust this based on your layout
                      }}
                    >
                      <AppointmentTimeSlot
                        time={slot.time}
                        selected={i === selectedIndex}
                        disabled={isDisabled}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

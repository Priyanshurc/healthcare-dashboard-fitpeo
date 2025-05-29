import React from 'react';

export default function AppointmentTimeSlot({ time, selected = false, disabled = false }) {
  return (
    <div
      className={`time-slot ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
    >
      {time}
    </div>
  );
}

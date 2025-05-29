import React from 'react';
import '../../styles/AppointmentDetailCard.css';

export default function AppointmentDetailCard({ title, time, doctor, icon, variant = 'primary' }) {
  return (
    <div className={`appointment-card ${variant}`}>
      <div className="appointment-card-header">
        <span className="title">{title}</span>
        <span className="icon">{icon}</span>
      </div>
      <div className="time">{time}</div>
      <div className="doctor">{doctor}</div>
    </div>
  );
}

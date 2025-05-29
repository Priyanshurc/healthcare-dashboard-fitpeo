import React from 'react';

// Organisms
import Sidebar from '../organisms/Sidebar';
import HeaderLeft from '../organisms/HeaderLeft';
import Anatomy3D from '../organisms/Anatomy3D';
import ActivityFeed from '../organisms/ActivityFeed';

// Molecules
import WeeklyCalendarGrid from '../molecules/WeeklyCalendarGrid';
import AppointmentDetailCard from '../molecules/AppointmentDetailCard';
import HeaderRight from '../organisms/HeaderRight';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9fbfd', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#fff', borderRight: '1px solid #e0e0e0' }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <div style={{ display: 'flex', flex: 1, gap: '24px', padding: '16px' }}>
          {/* Left Section */}
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <HeaderLeft />
            <Anatomy3D />
            <ActivityFeed />
          </div>

          {/* Right Section */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <HeaderRight />
            {/* Appointment Calendar */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <WeeklyCalendarGrid />
              <div style={{ display: 'flex', gap: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
                      <AppointmentDetailCard
                        title="Dentist"
                        time="09:00–11:00"
                        doctor="Dr. Cameron Williamson"
                        icon="🦷"
                        variant="primary"
                      />
                      <AppointmentDetailCard
                        title="Physiotherapy Appointment"
                        time="11:00–12:00"
                        doctor="Dr. Kevin Djones"
                        icon="💪"
                        variant="secondary"
                      />
                    </div>
            </div>

            {/* Upcoming Schedule */}
            <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)'}}>
              <h3>The Upcoming Schedule</h3>
              <p style={{ marginTop: '12px', fontWeight: 'bold' }}>On Thursday</p>
              <div style={{ display: 'flex', gap: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
              <AppointmentDetailCard
                        title="Health Checkup Complete"
                        time="11:00AM"
                        icon="💪"
                        variant="secondary"
                      />
                      <AppointmentDetailCard
                                title="Health Checkup Complete"
                                time="11:00AM"
                                icon="💪"
                                variant="secondary"
                              />
              <p style={{ marginTop: '12px', fontWeight: 'bold' }}>On Saturday</p></div>
              <div style={{ display: 'flex', gap: '20px', marginTop: '24px', flexWrap: 'wrap' }}>
              <AppointmentDetailCard
                        title="Cardiologist"
                        time="12:00 AM"
                        icon="💪"
                        variant="secondary"
                      />
              <AppointmentDetailCard
                        title="Neurologist"
                        time="16:00 PM"
                        icon="💪"
                        variant="secondary"
              /></div>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
}
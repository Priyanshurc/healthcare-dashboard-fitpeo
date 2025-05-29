import React from 'react';
import '../../styles/Sidebar.css';
import { FaCalendarAlt, FaChartBar, FaCommentDots, FaHistory, FaStethoscope, FaUserMd, FaCog, FaHeartbeat, FaHome } from 'react-icons/fa';

const navLinks = [
  { icon: <FaHome />, label: 'Dashboard' },
  { icon: <FaHistory />, label: 'History' },
  { icon: <FaCalendarAlt />, label: 'Calendar' },
  { icon: <FaUserMd />, label: 'Appointments' },
  { icon: <FaChartBar />, label: 'Statistics' },
  { icon: <FaStethoscope />, label: 'Tests' },
  { icon: <FaCommentDots />, label: 'Chat' },
  { icon: <FaHeartbeat />, label: 'Support' },
  { icon: <FaCog />, label: 'Setting' }
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="logo">Health<span className="blue">care.</span></span>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-title">General</p>
        <ul className="sidebar-nav">
          {navLinks.slice(0, 5).map(({ icon, label }) => (
            <li key={label} className="sidebar-item">
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
        <p className="sidebar-title">Tools</p>
        <ul className="sidebar-nav">
          {navLinks.slice(5).map(({ icon, label }) => (
            <li key={label} className="sidebar-item">
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

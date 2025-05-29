import React from 'react';
import '../../styles/ActivityFeed.css'; // Use your own path

const data = [
  {
    day: 'Mon',
    bars: [
      { height: 100, color: '#bfbfbf' }, // primary
      { height: 60, color: '#7ed6df' },  // secondary
      { height: 46, segments: [          // tertiary
        { height:20, width: 50, color: '#4a90e2' },
        {height:80,  width: 50, color: '#7ed6df' }
      ]},
      { height: 30, color: '#4adede' }   // fourth
      ]
  },
  {
    day: 'Tue',
    bars: [
      { height: 100, color: '#bfbfbf' }, // primary
      { height: 60, color: '#7ed6df' },  // secondary
      { height: 46, segments: [          // tertiary
        { width: 50, color: '#4a90e2' },
        { width: 50, color: '#7ed6df' }
      ]},
      { height: 30, color: '#4adede' }   // fourth
    ]
  },{
    day: 'Wed',
    bars: [
      { height: 100, color: '#bfbfbf' }, // primary
      { height: 60, color: '#7ed6df' },  // secondary
      { height: 46, segments: [          // tertiary
        { width: 50, color: '#4a90e2' },
        { width: 50, color: '#7ed6df' }
      ]},
      { height: 30, color: '#4adede' }   // fourth
    ]
  },{
    day: 'Thu',
    bars: [
      { height: 100, color: '#bfbfbf' }, // primary
      { height: 60, color: '#7ed6df' },  // secondary
      { height: 46, segments: [          // tertiary
        { width: 50, color: '#4a90e2' },
        { width: 50, color: '#7ed6df' }
      ]},
      { height: 30, color: '#4adede' }   // fourth
    ]
  },{
    day: 'Fri',
    bars: [
      { height: 100, color: '#bfbfbf' }, // primary
      { height: 60, color: '#7ed6df' },  // secondary
      { height: 46, segments: [          // tertiary
        { width: 50, color: '#4a90e2' },
        { width: 50, color: '#7ed6df' }
      ]},
      { height: 30, color: '#4adede' }   // fourth
    ]
  },{
    day: 'Sat',
    bars: [
      { height: 100, color: '#bfbfbf' }, // primary
      { height: 60, color: '#7ed6df' },  // secondary
      { height: 46, segments: [          // tertiary
        { width: 50, color: '#4a90e2' },
        { width: 50, color: '#7ed6df' }
      ]},
      { height: 30, color: '#4adede' }   // fourth
    ]
  },
  {
    day: 'Sun',
    bars: [
      { height: 100, color: '#bfbfbf' }, // primary
      { height: 60, color: '#7ed6df' },  // secondary
      { height: 46, segments: [          // tertiary
        { width: 50, color: '#4a90e2' },
        { width: 50, color: '#7ed6df' }
      ]},
      { height: 30, color: '#4adede' }   // fourth
    ]
  },
];

export default function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2>Activity</h2>
        <span className="appointments-count">3 appointments on this week</span>
      </div>

      <div className="activity-graph">
        <div className="graph-bars">
          {data.map(({ day, bars }, idx) => (
            <div key={idx} className="day-column">
              <div className="bar-group">
                {bars.map((bar, i) => (
                  bar.segments ? (
                    <div key={i} className="split-bar">
                      {bar.segments.map((segment, j) => (
                        <div
                          key={j}
                          className="bar-segment"
                          style={{
                            width: `${segment.width}%`,
                            backgroundColor: segment.color,
                            height: `${segment.height}px`,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="bar"
                      style={{
                        height: `${bar.height}px`,
                        backgroundColor: bar.color,
                      }}
                    />
                  )
                ))}
              </div>
              <div className="day-label">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

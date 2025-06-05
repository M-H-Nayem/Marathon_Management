// CountdownTimer.jsx
import React from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
  // 📅 Target date with time (change as needed)
  const targetDate = new Date('2025-06-15');

  // 🔧 Custom renderer to format the output
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h3 style={{ color: 'red' }}>⏰ Time's up!</h3>;
    } else {
      return (
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          ⏳ {days}d {hours}h {minutes}m {seconds}s
        </div>
      );
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>🚀 Countdown to Event</h2>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountDown;

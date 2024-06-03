import React, { useState } from 'react';

const ScheduleMatches = () => {
  const [date, setDate] = useState('');
  const [matches, setMatches] = useState([]);

  const scheduleMatch = () => {
    setMatches([...matches, { date }]);
    setDate('');
  };

  return (
    <div>
      <h2>Schedule Matches</h2>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <button onClick={scheduleMatch}>Schedule Match</button>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>{match.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleMatches;

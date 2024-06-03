import React, { useState } from 'react';

const TrackMatches = () => {
  const [match, setMatch] = useState({ date: '', players: '', score: '' });
  const [matches, setMatches] = useState([]);

  const addMatch = () => {
    setMatches([...matches, match]);
    setMatch({ date: '', players: '', score: '' });
  };

  return (
    <div>
      <h2>Track Matches</h2>
      <input 
        type="date" 
        value={match.date} 
        onChange={(e) => setMatch({ ...match, date: e.target.value })} 
      />
      <input 
        type="text" 
        value={match.players} 
        onChange={(e) => setMatch({ ...match, players: e.target.value })} 
        placeholder="Players" 
      />
      <input 
        type="text" 
        value={match.score} 
        onChange={(e) => setMatch({ ...match, score: e.target.value })} 
        placeholder="Score" 
      />
      <button onClick={addMatch}>Add Match</button>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>{`${match.date} - ${match.players} - ${match.score}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrackMatches;

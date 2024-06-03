import React, { useState } from 'react';

const Leaderboard = () => {
  const [players] = useState([
    { name: 'Player 1', score: 10 },
    { name: 'Player 2', score: 20 },
  ]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{`${player.name}: ${player.score}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

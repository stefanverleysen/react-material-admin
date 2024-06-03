import React, { useState } from 'react';

const AddPlayers = () => {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState([]);

  const addPlayer = () => {
    setPlayers([...players, { name }]);
    setName('');
  };

  return (
    <div>
      <h2>Add Players</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Player Name" 
      />
      <button onClick={addPlayer}>Add Player</button>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddPlayers;

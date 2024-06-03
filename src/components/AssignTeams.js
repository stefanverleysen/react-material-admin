import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialPlayers = [
  { id: '1', name: 'Player 1' },
  { id: '2', name: 'Player 2' },
  { id: '3', name: 'Player 3' },
  { id: '4', name: 'Player 4' }
];

const AssignTeams = () => {
  const [players, setPlayers] = useState(initialPlayers);
  const [teams, setTeams] = useState([[], []]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    if (source.droppableId === destination.droppableId) {
      const items = Array.from(source.droppableId === 'players' ? players : teams[destination.droppableId]);
      const [moved] = items.splice(source.index, 1);
      items.splice(destination.index, 0, moved);

      if (source.droppableId === 'players') {
        setPlayers(items);
      } else {
        const newTeams = Array.from(teams);
        newTeams[destination.droppableId] = items;
        setTeams(newTeams);
      }
    } else {
      const sourceItems = Array.from(source.droppableId === 'players' ? players : teams[source.droppableId]);
      const destItems = Array.from(destination.droppableId === 'players' ? players : teams[destination.droppableId]);

      const [moved] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, moved);

      if (source.droppableId === 'players') {
        setPlayers(sourceItems);
        const newTeams = Array.from(teams);
        newTeams[destination.droppableId] = destItems;
        setTeams(newTeams);
      } else {
        const newTeams = Array.from(teams);
        newTeams[source.droppableId] = sourceItems;
        if (destination.droppableId === 'players') {
          setPlayers(destItems);
        } else {
          newTeams[destination.droppableId] = destItems;
        }
        setTeams(newTeams);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Droppable droppableId="players">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={{ marginRight: 20 }}>
              <h2>Players</h2>
              {players.map((player, index) => (
                <Draggable key={player.id} draggableId={player.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: 8,
                        margin: '0 0 8px 0',
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        ...provided.draggableProps.style
                      }}
                    >
                      {player.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="0">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={{ marginRight: 20 }}>
              <h2>Team 1</h2>
              {teams[0].map((player, index) => (
                <Draggable key={player.id} draggableId={player.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: 8,
                        margin: '0 0 8px 0',
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        ...provided.draggableProps.style
                      }}
                    >
                      {player.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="1">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>Team 2</h2>
              {teams[1].map((player, index) => (
                <Draggable key={player.id} draggableId={player.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: 8,
                        margin: '0 0 8px 0',
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        ...provided.draggableProps.style
                      }}
                    >
                      {player.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default AssignTeams;

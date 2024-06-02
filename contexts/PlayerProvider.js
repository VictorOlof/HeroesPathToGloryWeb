import React, { useState, useEffect } from 'react';
import { PlayerContext } from './PlayerContext';
import { Player } from '../engine/Player';

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetchPlayerData();
  }, []);

  const fetchPlayerData = async () => {
    try {
      const response = await fetch('http://localhost:3000/player');
      const data = await response.json();
      const playerInstance = new Player(
        data.gold,
        data.experiencePoints,
        data.currentMana,
        data.maximumMana,
        data.maxFuel,
        data.currentFuel,
        data.inventory,
        data.quests
      );
      setPlayer(playerInstance);
    } catch (error) {
      console.error('Failed to fetch player data', error);
    }
  };

  const updatePlayerData = async (newData) => {
    if (!player) return;

    try {
      const response = await fetch('http://localhost:3000/player', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...player, ...newData })
      });
      const data = await response.json();
      const updatedPlayer = new Player(
        data.gold,
        data.experiencePoints,
        data.currentMana,
        data.maximumMana,
        data.maxFuel,
        data.currentFuel,
        data.inventory,
        data.quests
      );
      setPlayer(updatedPlayer);
    } catch (error) {
      console.error('Failed to update player data', error);
    }
  };

  return (
    <PlayerContext.Provider value={{ player, updatePlayerData }}>
      {children}
    </PlayerContext.Provider>
  );
};

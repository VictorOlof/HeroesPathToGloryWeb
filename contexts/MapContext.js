import React, { createContext, useState } from 'react';

// Map logic
const initialMap = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

const locationsPerRow = {
  0: [3],
  1: [2, 3, 4],
  2: [],
};

const generateLocationsToMap = (map, locationsPerRow) => {
  const newMap = JSON.parse(JSON.stringify(map)); // Deep copy to avoid mutation

  for (let i = 0; i < newMap.length; i++) {
    const rowLocations = locationsPerRow[i] || [];

    for (let j = 0; j < rowLocations.length; j++) {
      const location = rowLocations[j];
      let placed = false;

      while (!placed) {
        const newPos = Math.floor(Math.random() * newMap[i].length);
        if (newMap[i][newPos] === 0) {
          newMap[i][newPos] = location;
          placed = true;
        }
      }
    }
  }

  return newMap;
};

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [map, setMap] = useState(() => generateLocationsToMap(initialMap, locationsPerRow));
  const initialPosition = { x: 2, y: 3 }; // Starting position of number 1
  const [position, setPosition] = useState(initialPosition);

  const regenerateMap = () => {
    console.log("Regenerate button pressed");
    const newMap = generateLocationsToMap(initialMap, locationsPerRow);
    console.log("New map generated:", newMap);
    setMap(newMap);
  };

  return (
    <MapContext.Provider value={{ map, regenerateMap, position, setPosition }}>
      {children}
    </MapContext.Provider>
  );
};
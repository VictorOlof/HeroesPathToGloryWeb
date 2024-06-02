export class Player {
  constructor(
    gold,
    experiencePoints,
    currentMana,
    maximumMana,
    maxFuel,
    currentFuel,
    inventory,
    quests
  ) {
    this.gold = gold;
    this.experiencePoints = experiencePoints;
    this.currentMana = currentMana;
    this.maximumMana = maximumMana;
    this.maxFuel = maxFuel;
    this.currentFuel = currentFuel;
    this.inventory = inventory;
    this.quests = quests;
    this.map = this.generateInitialMap();
    this.position = { x: 2, y: 3 }; // Starting position of number 1
  }

  get level() {
    return Math.floor(this.experiencePoints / 100) + 1;
  }

  generateInitialMap() {
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

    return this.generateLocationsToMap(initialMap, locationsPerRow);
  }

  generateLocationsToMap(map, locationsPerRow) {
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
  }

  regenerateMap() {
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

    this.map = this.generateLocationsToMap(initialMap, locationsPerRow);
  }
}
import React, { useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import { MapContext } from '../contexts/MapContext'; // Adjusted path

const Map = () => {
  const { map, position, regenerateMap } = useContext(MapContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        {map.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <View
                key={cellIndex}
                style={[
                  styles.cell,
                  position.x === rowIndex && position.y === cellIndex && styles.currentPosition
                ]}
              >
                <Text
                  style={[
                    styles.cellText,
                    position.x === rowIndex && position.y === cellIndex && styles.currentPositionText
                  ]}
                >
                  {cell}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <Button title="Regenerate Map" onPress={regenerateMap} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Dark grey background
  },
  mapContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  cellText: {
    color: '#fff', // White text color for the rest of the numbers
  },
  currentPosition: {
    backgroundColor: '#444', // Different background color for current position
  },
  currentPositionText: {
    color: 'red', // Red text color for current position
  },
});

export default Map;

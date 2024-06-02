import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { MapContext } from '../contexts/MapContext';

export default function Spaceship() {
  const { map, position, setPosition } = useContext(MapContext);

  const movePlayer = (direction) => {                                                                                                                                     
    let { x, y } = position;
    switch (direction) {
      case 'up':
        if (x > 0) x -= 1;                                                    
        break;
      case 'down':
        if (x < map.length - 1) x += 1;
        break;
      case 'left':
        if (y > 0) y -= 1;
        break;
      case 'right':
        if (y < map[0].length - 1) y += 1;
        break;
    }
    setPosition({ x, y });
  };

   const currentNumber = map[position.x][position.y];

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Qux
        </Text>
        <Image style={styles.logo} source={require('../assets/qux.gif')} />
      </View>
      <View style={styles.container}>
      <Text style={styles.positionText}>Planetttt: {currentNumber}</Text>
        <Text style={styles.positionText}>Current Position: ({position.x}, {position.y})</Text>
        <View style={styles.buttonContainer}>
          <Button title="Up" onPress={() => movePlayer('up')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Left" onPress={() => movePlayer('left')} />
          <Button title="Right" onPress={() => movePlayer('right')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Down" onPress={() => movePlayer('down')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#333', // Dark grey background
  },
  container: {
    flex: 0.7, // Ensures the container takes the whole screen
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333', // Dark grey background
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', // White text for contrast
  },
  logo: {
    height: 128,
    width: 128,
  },
  positionText: {
    margin: 24,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', // White text for contrast
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});

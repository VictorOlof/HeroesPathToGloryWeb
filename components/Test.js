import React, { useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

const Test = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>aa</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Dark grey background
  }
});

export default Test;

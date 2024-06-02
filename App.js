// Libs
import React from 'react';
import { View, Platform, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
//import { AppRegistry } from 'react-native-web';

// Components
import Spaceship from './components/Spaceship'; 
import Map from './components/Map'; 
import Test from './components/Test'; 
import { PlayerProvider } from './contexts/PlayerProvider'; // Import PlayerProvider
import { MapProvider } from './contexts/MapContext'; // Import MapProvider

// Navigation
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();



function MobileView() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Spaceship':
              iconName = 'planet-outline';
              break;
            case 'Map':
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              break;
            default:
              iconName = 'default-icon'; // Add a default case if necessary
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Spaceship" component={Spaceship} options={{ title: 'Spaceship' }} />
      <Tab.Screen name="Map" component={Map} options={{ title: 'Map' }} />
    </Tab.Navigator>
  );
}


function WebView() {
  const { width } = useWindowDimensions();

 
  if (width < 600) {
    return <MobileView />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.componentContainer}>
        <Spaceship />
        <Map />
      </View>
    </SafeAreaView>
  );
}


export default function App() {
  return (
    <PlayerProvider>
      <MapProvider>
        <NavigationContainer>
          {Platform.OS === 'web' ? <WebView /> : <WebView />}
        </NavigationContainer>
      </MapProvider>
    </PlayerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  componentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

/*

<PlayerProvider>
      <MapProvider>
        <NavigationContainer>
          {Platform.OS === 'web' ? <WebView /> : <WebView />}
        </NavigationContainer>
      </MapProvider>
    </PlayerProvider>


*/



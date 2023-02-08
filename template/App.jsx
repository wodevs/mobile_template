/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>      
      <Text variant="titleLarge" style={{fontWeight: 'bold', marginBottom: 5}}>WODEVS TEMPLATE</Text>
      <Button mode="contained" icon="home" buttonColor="black" 
        onPress={() => navigation.navigate("Home")}>
          Go to Home Screen
      </Button>
    </View>
  )
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={{fontWeight: 'bold', marginBottom: 5}}>WODEVS TEMPLATE</Text>
      <Button mode="contained" icon="account" buttonColor="black" 
        onPress={() => navigation.navigate("Profile")}>
          Go to Profile Screen
      </Button>
    </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} 
            options={{headerShown: false}} 
          />
          <Stack.Screen name="Profile" component={ProfileScreen} 
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
});

export default App;

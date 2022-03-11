import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Coffee from '../screens/Coffee'
import CoffeeRegister from '../screens/Coffee/CoffeeRegister'

const Stack = createStackNavigator();

export default function CofeeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#ff5a60' }
    }}
    >
      <Stack.Screen
        name='coffee'
        component={Coffee}
        options={{ title: 'Cafés programados' }}
      />
      <Stack.Screen
        name='coffeeRegister'
        component={CoffeeRegister}
        options={{ title: 'Programar café' }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
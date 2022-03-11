import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile'
import SignIn from '../screens/Profile/SignIn'

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#ff5a60' }
        }}
        >
            <Stack.Screen
                name='profile'
                component={Profile}
                options={{ title: 'Perfíl' }}
            />
            <Stack.Screen
                name='signIn'
                component={SignIn}
                options={{ title: 'Registrarse' }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon, Tab } from 'react-native-elements'
import Home from '../screens/Home'
import CoffeeStack from './CoffeeStack'
import ProfileStack from './ProfileStack'

export default function Navigation() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#ff5a60',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: route.name == 'home',
                    tabBarIcon: ()=>screenOptions(route)
                })}
            >
                <Tab.Screen
                    name='home'
                    component={Home}
                    options={{ title: 'Inicio' }}
                />
                <Tab.Screen
                    name='coffeeStack'
                    component={CoffeeStack}
                    options={{ title: 'Programar cafés' }}
                />
                <Tab.Screen
                    name='profileStack'
                    component={ProfileStack}
                    options={{ title: 'Perfíl' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = (route) => {
    let iconName
    switch (route.name) {
        case 'home':
            iconName = 'home'
            break
        case 'coffeeStack':
            iconName = 'coffee'
            break
        case 'profileStack':
            iconName = 'user'
            break
    }
    return (
        <Icon
            type='feather'
            name={iconName}
            size={22}
            color='#000'
        />
    )
}